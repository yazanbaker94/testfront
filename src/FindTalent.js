import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import JobModal from './JobModal'
import Header from './componants/Header'
import axios from 'axios';
import Footer from './componants/Footer';
// import Findtalentcard from './componants/Findtalentcard';
import Profilecard from './componants/Profilecard';
import Updateform from './componants/Updateform';
import { withAuth0 } from '@auth0/auth0-react';
import UpdateFormModal from './UpdateFormModal';
class FindTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobData: [],
      //fromProfile
      dataformBack:[],
      // email: "munther.abdlrahman@gmail.com",
      name: '',
      skills:'',
      bio:'',
      phone:'',
      websiteUrl: '',
      freelanceData:[]
    }
    console.log('this.state.data',this.state.data);
  }
  dataSubmitHandler = async () => {
    const axiosResponse = await axios.get(`http://localhost:3001/findJobs`)
    console.log(axiosResponse)
    this.setState({
      jobData: axiosResponse.data,
    })
  }
  dataSubmitfreelance = async () => {
    const axiosResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Notifies`)
    console.log(axiosResponse)
    this.setState({
      freelanceData: axiosResponse.data,
    })
  }
  showModal = () => {
    this.dataSubmitHandler();
    this.setState({
      show: true
    });
  };
  hideModal = () => {
    this.dataSubmitfreelance()
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        <Header />
        <JobModal show={this.state.show} hide={this.hideModal} showData={this.state.jobData} />
        <Updateform/>
        
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/free-photo/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Button style={{
                position: 'relative',
                bottom: '300px',
                left: '300px'
              }} variant="outline-success" size="lg" onClick={this.showModal} > Find a Job</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: 'center' }}>Our Freelancers</h1>
        
        {
           this.state.freelanceData.map((element, index) => {
            return <>
            <Profilecard name={element.name} bio={element.bio} skills={element.skills} phone={element.phone} websiteUrl={element.websiteUrl} />
            <Updateform/>
            <UpdateFormModal nameOnChange={this.nameOnChange} jobTitleChange={this.jobTitleChange} descriptionChange={this.descriptionChange} jobTitle={this.state.newJobTitle} description={this.state.newDescription} UpdateJob={this.UpdateJob} />
            </>
        })
      }
        <Footer />
      </div>
    )
  }
}
export default withAuth0(FindTalent);