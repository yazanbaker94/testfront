import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Header from './componants/Header'
import './ContactUs.css';
import Footer from './componants/Footer'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";


class ContactUs extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="headershow">
          <img className="imgheader" src="/contact2.png" />
          <h1 >  Contact Informations  </h1>
          <h2>Phone: 777-999-000</h2>
          <h2>
            Email: info@devgig.com
          </h2>

          <h2> Social Media Links <br></br>
            <FontAwesomeIcon icon={faFacebook} className="icon" size="2x" />
            <FontAwesomeIcon icon={faInstagram} className="icon" size="2x" />
            <FontAwesomeIcon icon={faTwitter} className="icon" size="2x" />


          </h2>
        </div>
        <Container>
          <div>
            <h2 className="textForm">Give Us FeedBack</h2>
            <Form className="formmain">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className='formheaders'>
                  Email</Form.Label>
                <Form.Control className="inputform" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className='formheaders'>FeedBack</Form.Label>
                <Form.Control className="inputform2" as="textarea" rows={3} />
                <Button className="likebtn" variant="secondary">like</Button>
                <Button variant="outline-secondary">dislike</Button>
                <Button className="savebtn" variant="outline-secondary">Save</Button>
              </Form.Group>
            </Form>
          </div>
        </Container>

        <h1 className="textteam" >Our Team</h1>
          <div className="cardgroup">

            {/* <Col sm={10}> */}
            {/* <CardGroup className='cardgroup'> */}
            <Card className="card1" border="primary">
              <Card.Img variant="top" src="/yazan.png" className='images1' />
              <Card.Body>
                <Card.Title className='text'>Yazan Baker</Card.Title>
                <Card.Text className='text'>
                  Occupational safety and security.
                </Card.Text>
                <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
                <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
              </Card.Body>
            </Card>

            <Card className="card1">
              <Card.Img variant="top" src="/erada.jpg" className='images' />
              <Card.Body>
                <Card.Title>Erada  Ali</Card.Title>
                <Card.Text>
                  Computer Science
                </Card.Text>
                <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
                <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
              </Card.Body>
            </Card>

            <Card className="card1">
              <Card.Img variant="top" src="/razan.png" className='images1' />
              <Card.Body>
                <Card.Title className='text'>Razan Alamleh</Card.Title>
                <Card.Text className='text'>
                  Architecture Engineering
                </Card.Text>
                <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
                <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
              </Card.Body>
            </Card>
            <Card className="card1">
              <Card.Img variant="top" src="/munther.jpg" className='images' />
              <Card.Body>
                <Card.Title>Munther AbdlRahman  </Card.Title>
                <Card.Text>
                  Electrical Engineering
                </Card.Text>
                <a href="https://www.linkedin.com/in/erada-ali-54b8901b9"><img src="   https://www.pngjoy.com/pngm/381/7044985_linkedin-logo-png-linkedin-logo-png-black-transparent.png " alt="LinkedIn" /></a>
                <a href="https://github.com/eradaali"><img src=" https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="GitHub" /></a>
              </Card.Body>
            </Card>

            {/* </CardGroup> */}
            {/* </Col> */}
          </div>
          <Footer />
        </div>
        )
  }
}

        export default ContactUs