import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import JobModal from './JobModal'
import axios from 'axios';
import Header from './componants/Header';
import Footer from './componants/Footer';


class FindTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      jobData: []
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

        <CardGroup>
          <Card border="primary" style={{ width: '30px', display:'inline-block',marginBottom:'200px'}}>
            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'35px',marginLeft:'20px'}}/>
            <Card.Body style={{height:'400px'}}>
              <Card.Title style={{ marginTop:'60px'}}>Name:</Card.Title>
              <Card.Title style={{ marginTop:'60px'}}>Bio:</Card.Title>
              <Card.Title style={{position:"absolute",top:'30px',left:'300px'}}>Skills:</Card.Title>
              <Card.Title style={{position:"absolute",top:'100px',left:'300px'}}>Work Samples:</Card.Title>
              <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'0px',position:"absolute",top:'150px',left:'300px'}} />
              <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'200px',position:"absolute",top:'150px',left:'400px'}}/>
              <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'400px',position:"absolute",top:'150px',left:'500px'}}/>
              <Card.Title style={{position:"absolute",top:'400px',left:'300px'}}>Contact Info</Card.Title>
              <Card.Title style={{position:"absolute",top:'500px',left:'300px'}}>Phone:</Card.Title>
              <Card.Title style={{position:"absolute",top:'500px',left:'700px'}}>WebsiteUrl:</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup>
        <Footer/>
      </div>
    )
  }
}

export default FindTalent;
