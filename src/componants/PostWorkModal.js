import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

 class PostWorkModal extends Component {
    render() {
        return (
            <div>

                
                     <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" placeholder="Company Name" />
    <Form.Label>Job Title</Form.Label>
    <Form.Control type="text" placeholder="Company Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

<Button variant="primary" type="submit">
    Submit
  </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default PostWorkModal
