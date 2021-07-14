import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import './UpdateFormModal.css'

export class UpdateFormModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobsData: [],
            showModal:false
        }
    };

    showModal = () => {
        this.setState({
            showModal: true
        })
    
    };
    handleclose = () => {
        this.setState(
            { showModal: false }
        )
    };



    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <div>
            {isAuthenticated ? <Button variant="warning" type="submit" onClick={this.showModal}    className='updateJob'>Update Selected Job</Button>: ''}
            {this.state.showModal && (

                <Modal show={this.state.showModal} onHide={this.handleclose}>
                    <Modal.Header closeButton style={{backgroundColor:'#d0cecd'}}>
                        <Modal.Title style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Update Job Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.UpdateJob}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Update Company Name</Form.Label>
                                <Form.Control type="text"   onChange={this.props.nameOnChange} />
                           
                                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Update Job Title</Form.Label>
                                <Form.Control type="text"  onChange={this.props.jobTitleChange}/>
                                <Form.Label style={{fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'bold'}}>Update Job Description</Form.Label>
                                <Form.Control type="text"  onChange={this.props.descriptionChange} />
                      <Button type='submit' variant="secondary" style={{marginTop:'20px'}}>Update Current Job</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                       
                <Button variant="secondary" onClick={this.handleclose}>
                close
                </Button> 
                    </Modal.Footer>
                </Modal>
            )
            }
        </div>

    )
}
}

export default withAuth0(UpdateFormModal)