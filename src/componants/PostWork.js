import React, { Component } from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import PostWorkModal from './PostWorkModal'
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
          
        
            const jobsData = await axios.get(`http://localhost:3001/jobs?email=softwaredohanow@gmail.com`);
            console.log('book data exists!', jobsData.data);
            console.log('book data exists!', jobsData.data.email);
            this.setState({
                jobsData: jobsData.data
            });
          };


          postJob = (e) => {
            (e).preventDefault();
            const { user } = this.props.auth0;

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
    
                    })
                })
            } catch {
                console.log('error')
            }
        }

    
    render() {
        return (
            <div>
                <Header/>
                <Button onClick={this.showModal} block>Add Job</Button>
                <PostWorkModal nameOnChange={this.nameOnChange} jobTitleChange={this.jobTitleChange} descriptionChange={this.descriptionChange} postJob={this.postJob} show={this.state.show} handleClose={this.hideModal}/>


           





<CardGroup>
<Card>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" />
  <Card.Body>
    <Card.Title>x</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardGroup>

 




    }



       

                
            </div>
        )
    }
}

export default withAuth0(PostWork)
