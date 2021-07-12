import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import JobModal from './JobModal'
import axios from 'axios';
import Header from './componants/Header';
// import Footer from './componants/Footer';


class FindTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobData: [],
      //fromProfile
      newName: '',
      newSkills: '',
      newBio: '',
      newContact: '',
      newPhone: '',
      newWeb: '',
      dataformBack:[],
    }
  }

  dataSubmitHandler = async () => {
    const axiosResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/findJobs`)
    console.log(axiosResponse)

    this.setState({
      jobData: axiosResponse.data,
    })

  }


  showModal = () => {
    this.dataSubmitHandler();
    this.setState({
      show: true
    });
  };

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <JobModal show={this.state.show} hide={this.hideModal} showData={this.state.jobData} />
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

        

     
        {/* <Footer/> */}
      </div>
    )
  }
}

export default FindTalent;