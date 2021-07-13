import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import JobModal from './JobModal'
import Header from './componants/Header'
import axios from 'axios';
import Footer from './componants/Footer';

class FindTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobData: [],
      //fromProfile
      dataformBack:[],
      name:''
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

  getRequest = async ()=>{
    let email = this.props.auth0.user.email;
    console.log('email',email);
    const url = `http://localhost:8000/freelance?email=munther.abdlrahman@gmail.com`;
    axios.get(url).then(response =>{
      console.log('previous data',response);
      this.setState({
        dataformBack:response.data.name
      })
    })
  }
  render() {
    return (
      <div>
        <Header />
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
        <h1>name:{this.state.dataformBack}</h1>
        {
          this.state.dataformBack.map((element)=>{
            return<>
            <h1>Name:{element.name}</h1>
            <h1>skills:{element.skills}</h1>
            </>
          })
        }
        <Footer />
      </div>
    )
  }
}

export default FindTalent;
