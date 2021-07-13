import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'

import JobModal from './JobModal'
import Header from './componants/Header'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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


    const axiosResponse = await axios.get(`http://localhost:3001/findJobs`)
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

        <CardGroup>

          <Card>

            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" />
            <Card.Body>
              <Card.Title>Ahmad Ahmad</Card.Title>
              <Card.Text>
                Work: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br></br>
                <br></br>

                Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>


      </div>
    )
  }

}

export default FindTalent
