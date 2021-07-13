import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './PostWorkModal.css'

class PostWorkModal extends Component {
  render() {
    return (
      <div >
        <Modal show={this.props.show} onHide={this.props.handleClose} >
          <Modal.Header closeButton style={{backgroundColor:'#d0cecd'}}>
            <Modal.Title style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Post a Job</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Company Name" onChange={(e) => this.props.nameOnChange(e)} />
                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Job Title" onChange={(e) => this.props.jobTitleChange(e)} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => this.props.descriptionChange(e)} />
              </Form.Group>
            </Form>

            <Button variant="secondary" type="submit" onClick={(e) => this.props.postJob(e)}>
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

export default PostWorkModal;
