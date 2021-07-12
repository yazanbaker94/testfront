import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


class JobModal extends Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hide} animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center' }}>Apply to Jobs From Around The World</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.showData.map(item => {

              return <CardDeck>
                <Card>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Company Name: {item.company_name} <br></br>
                      Job Type: {item.job_type}<br></br>
                      <a href={item.url}>Apply</a>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Published: {item.publication_date}</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            })
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default JobModal
