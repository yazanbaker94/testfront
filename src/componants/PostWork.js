import React, { Component } from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import PostWorkModal from './PostWorkModal'
import UpdateFormModal from '../UpdateFormModal'
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
 class PostWork extends Component {

    constructor(props) {
        super(props);
        this.state={
            show:false,
            email:'',
            newCompanyName: '',
            newJobTitle: '',
            newDescription: '',
            jobsData: [],
            mounted: false,
            showUpdateForm:false,
            index:0,
         
        }
        }

   

        nameOnChange = (e) => {
          (e).preventDefault();
          this.setState({
              newCompanyName: e.target.value
          })
          console.log('Company Name', e.target.value)
      }

      jobTitleChange = (e) => {
        (e).preventDefault();
        this.setState({
          newJobTitle: e.target.value
        })
        console.log('newJobTitle', e.target.value)
    }

      descriptionChange = (e) => {
        (e).preventDefault();
        this.setState({
          newDescription: e.target.value
        })
        console.log('newDescription', e.target.value)
    }


        showModal = () =>{
              this.setState({
                  show:true
              });
          };
      
          hideModal = () =>{
              this.setState({
                  show:false
              });
          };

          componentDidMount = async () => {
          

        
            await axios.get(`http://localhost:3001/jobs?email=softwaredohanow@gmail.com`).then(response => {
                this.setState({
                    jobsData: response.data,
                    mounted: true
                })
            });
            // console.log('job data exists!', jobsData.data);
            
            // this.setState({
            //     jobsData: jobsData.data,
            //     mounted: true
            // });
          };


          postJob = (e) => {
            (e).preventDefault();
            const { user } = this.props.auth0;
            console.log(user.email);


            try {
                const reqBody = {
                    email: `${user.email}`,
                    companyName: this.state.newCompanyName,
                    jobTitle: this.state.newJobTitle,
                    description: this.state.newDescription,
          
                }
    
                const url = `http://localhost:3001/jobs`;
                axios.post(url, reqBody).then(response => {
                    console.log('new data', response.data);
                    console.log('reqBody', reqBody)
                    this.setState({
                        jobsData: response.data
    
                    }); console.log(this.state.jobsData)
                })
            } catch {
                console.log('error')
            }
        }

        deleteJob=async(index)=>{
            const newArrJob=this.state.jobsData.filter((bok,idx)=>{
              return idx !== index;
            })
            console.log(newArrJob);
            this.setState({
                jobsData:newArrJob
            })
            
            const queryParams={
              email:'softwaredohanow@gmail.com'
            }
            await axios.delete(`http://localhost:3001/jobs/${index}`,{params:queryParams})
            };
          

            showUpdateForm=(idx)=>{
                const newArr=this.state.jobsData.filter((value,index)=>{
                  return idx ===index
                });
            
                this.setState({
                  index:idx,
                  newCompanyName :newArr.companyName,
                  newJobTitle:newArr.jobTitle,
                  newDescription :newArr.description,
                  showUpdateForm:true,
                })
                  };

                  UpdateJob=async(e)=>{
                    e.preventDefault();
                    const bodydata= {
                        companyName:this.state.newCompanyName,
                        jobTitle:this.state.newJobTitle,
                        description:this.state.newDescription,
                       email:'softwaredohanow@gmail.com'}
                    const updateJob=await axios.put(`http://localhost:3001/jobs/${this.state.index}`,bodydata)
                  this.setState({
                    jobsData:updateJob.data
                  })
                  };

    
    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return (
            <div>
                <Header/>

                <UpdateFormModal nameOnChange={this.nameOnChange}  jobTitleChange={this.jobTitleChange} descriptionChange={this.descriptionChange} jobTitle={this.state.newJobTitle} description={this.state.newDescription} UpdateJob={this.UpdateJob}/>

                {isAuthenticated ? <Button onClick={this.showModal} block>Add Job</Button>: ''}

                <PostWorkModal nameOnChange={this.nameOnChange} jobTitleChange={this.jobTitleChange} descriptionChange={this.descriptionChange} postJob={this.postJob} show={this.state.show} handleClose={this.hideModal}/>


           



{
    (this.state.mounted) && this.state.jobsData.map((element, index) => {
        return <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" />
          <Card.Body>
            <Card.Title>{element.companyName}</Card.Title>
            <Card.Text>
            Job Title: {element.jobTitle} <br></br>  <br></br>
              Job Description: {element.description}
            </Card.Text>
            {isAuthenticated ? <><Button  onClick={()=>this.deleteJob(index)}>Remove Job</Button><br></br>

            <Button  variant="warning" onClick={() =>this.showUpdateForm (index)} class='button'>Job Selector</Button> </> : '' }

          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </CardGroup>


    })
}



 




    



       

                
            </div>
        )
    }
}

export default withAuth0(PostWork)
