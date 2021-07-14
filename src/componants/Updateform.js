import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"
import Profilecard from './Profilecard';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { faThList } from '@fortawesome/free-solid-svg-icons';

import { withAuth0 } from '@auth0/auth0-react';
export class Updateform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newSkills: '',
            newBio: '',
            newContact: '',
            newPhone: '',
            newWeb: '',
            dataformBack: [],
        }
    }
    nameONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newName: e.target.value
        })
        // console.log('newName', e.target.value)
    }
    SkillsONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newSkills: e.target.value
        })
        //    console.log('newSkills',e.target.value)
    }
    BioONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newBio: e.target.value
        })
        //    console.log('newBio',e.target.value)
    }
    contactONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newContact: e.target.value
        })
        //    console.log('newContact',e.target.value)
    }
    phoneONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newPhone: e.target.value
        })
        //    console.log('newPhone',e.target.value)
    }
    websiteONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newWeb: e.target.value
        })
        //    console.log('newWeb',e.target.value)
    }
    urProjectONchangeA = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectA: e.target.value
        })
        //    console.log('urProject A',e.target.value)
    }
    urProjectONchangeB = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectB: e.target.value
        })
        // console.log('urProject B', e.target.value)
    }
    urProjectONchangeC = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectC: e.target.value
        })
        // console.log('urProject C', e.target.value)
    }
    imageONchange = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectC: e.target.value
        })
        //    console.log('image',e.target.value)
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    componentDidMount = async () => {
        let email = 'razanalamleh@gmail.com'
        console.log('email', email)
        const url = `http://localhost:3001/userfreelance?email=${email}`;
        axios.get(url).then(response => {
            console.log('previous data', response);
            this.setState({
                dataformBack: response.data
            })
        })
    }
    postFreelance = (e) => {
        (e).preventDefault();
        try {
            const reqBody = {
                email: "razanalamleh@gmail.com",
                name: this.state.newName,
                skills: this.state.newSkills,
                bio: this.state.newBio,
                phone: this.state.newPhone,
                websiteUrl: this.state.newWeb,
                // userEmail: this.props.auth0.user.email
            }
            const url = `http://localhost:3001/userfreelance`;
            axios.post(url, reqBody).then(response => {
                console.log('new data', response.data);
                console.log('reqBody', reqBody)
                this.setState({
                    dataformBack: response.data
                })
            })
        } catch {
            console.log('error')
        }
    }
    deleteFreelance = async (free_idx) => {
        const newArrAfterDelete = this.state.dataformBack.filter((dta, idx) => {
            return idx !== free_idx;
        })
        console.log(newArrAfterDelete);
        this.setState({
            dataformBack: newArrAfterDelete
        })
        //  const{user}=this.props.auth0;
        const qureyParams = {
            email: 'razanalamleh@gmail.com'
        }
        await axios.delete(`http://localhost:3001/userfreelance/${free_idx}`, { params: qureyParams })
    }
    //  updateFreelance=async(e,free_idx)=>{
    //      e.preventDefault();
    //      const newReqBody={
    //          name:this.state.newName,
    //          skills:this.state.newSkills,
    //          bio:this.state.newBio,
    //          phone:this.state.newPhone,
    //          websiteUrl:this.state.newWeb,
    //         //  userEmail: this.props.auth0.user.email
    //         email:"munther.abdlrahman@gmail.com"
    //      }
    //      console.log('beforUpdate',newReqBody);
    //      const updateFreelanceUser=await axios.put(`http://localhost:8000/up-userfreelance/${free_idx}`,newReqBody) 
    //      console.log('afterUpdate',newReqBody);
    //      this.setState({
    //         dataformBack:updateFreelanceUser.data
    //      })
    //  }
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <div>
                {isAuthenticated ? <Button variant="warning" onClick={() => { this.handleModal() }}>Promote yourself</Button> : ''}
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>{this.props.newNameBook}</Modal.Header>
                    <Modal.Body>
                        <form id="formP">
                            <h3>Apply For Promotion</h3>
                            <label for="fname">Name</label><br />
                            <input type="text" id="fname" name="firstname" placeholder="Your name:" onChange={(e) => this.nameONchange(e)} />
                            <br />
                            <label for="skill">Skills</label><br />
                            <input type="text" id="fname" placeholder="Your Skills:" onChange={(e) => this.SkillsONchange(e)} />
                            <br />
                            <label for="bio">Bio</label><br />
                            <input type="text" id="fname" placeholder="Bio:" onChange={(e) => this.BioONchange(e)} />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h3>Work Samples</h3>
                            <br />
                            <br />
                            {/* <label for="bio">Your Website A :-  </label>
                        <input required aria-required="true"id="fname" class="input" id="email" name="E-mail" placeholder='Best of  Your website...' onChange={(e) => this.urProjectONchangeA(e)} />
                        <br />
                        <label for="bio">Your Website B :- </label>
                        <input required aria-required="true" id="fname" class="input" id="email" name="E-mail" placeholder='Best of  Your website...' onChange={(e) => this.urProjectONchangeB(e)} />
                        <br />
                        <label for="bio">Your Website C :-  </label>
                        <input required aria-required="true" id="fname" class="input" id="email" name="E-mail" placeholder='Your GitHub...' onChange={(e) => this.openPrimary(e)} />
                        <br />
                        <label class="label" for="url">Upload Url image for best project :-</label>
                        <input   class="input" id="url_txt" name="Url" type="url"  placeholder='Your Img Url...' required onChange={(e) => { this.imageONchange(e) }} />
                        <br /> */}
                            <br />
                            <h3>Contact Info</h3><br />
                            <br />
                            <label for="fname">Phone</label><br />
                            <input type="text" id="fname" name="firstname" placeholder="Phone #" onChange={(e) => this.phoneONchange(e)} />
                            <br />
                            <label for="fname">Website Url</label><br />
                            <input required aria-required="true" type="text" id="fname" name="firstname" placeholder="Website Url" onChange={(e) => this.websiteONchange(e)} />
                            <br />
                            <br />
                            <button onClick={(e) => this.postFreelance(e)} >Premote yourself</button>
                        </form>
                    </Modal.Body>
                </Modal>
                {
                    this.state.dataformBack.map((element, index) => {
                        return <>
                            <Profilecard name={element.name} bio={element.bio} skills={element.skills} phone={element.phone} websiteUrl={element.websiteUrl} />
                            {isAuthenticated ? <Button variant="danger" onClick={() => this.deleteFreelance(index)}>Delete</Button> : ''}
                            {/* <Modelformforupdate key={index} id={index} free_idx={index}  nameONchange={this.nameONchange} SkillsONchange={this.SkillsONchange} BioONchange={this.BioONchange} phoneONchange={this.phoneONchange} websiteONchange={this.websiteONchange}  updateFreelance={this.updateFreelance}
                        newName={element.name} newSkills={element.skills} newBio={element.bio} newPhone={element.phone} newWeb={element.websiteUrl}   /> */}
                        </>
                    })
                }
            </div>
        )
    }
}
export default withAuth0(Updateform)