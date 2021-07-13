import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

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
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <div>
            {isAuthenticated ? <Button variant="warning" type="submit" onClick={this.showModal} block >Update Selected Job</Button>: ''}
            {this.state.showModal && (

                <Modal show={this.state.showModal} onHide={this.handleclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Job Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.UpdateJob}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Update Company Name</Form.Label>
                                <Form.Control type="text"  value={this.props.newCompanyName} onChange={this.props.nameOnChange} />
                           
                                <Form.Label >Update Job Title</Form.Label>
                                <Form.Control type="text" value={this.props.newJobTitle}  onChange={this.props.jobTitleChange}/>
                                <Form.Label>Update Job Description</Form.Label>
                                <Form.Control type="text" value={this.props.newDescription} onChange={this.props.descriptionChange} />
                      <Button type='submit'>Update Current Job</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                       
                <Button variant="primary" onClick={this.handleclose}>
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