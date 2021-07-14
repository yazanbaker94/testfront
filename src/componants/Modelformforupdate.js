import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';


export class Modelformforupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataformBack: [],
            showModal: false

        }
    }


    // nameONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newName: e.target.value
    //     })
    //     // console.log('newName', e.target.value)
    // }
    // SkillsONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newSkills: e.target.value
    //     })
    //     //    console.log('newSkills',e.target.value)
    // }

    // BioONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newBio: e.target.value
    //     })
    //     //    console.log('newBio',e.target.value)
    // }

    // contactONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newContact: e.target.value
    //     })
    //     //    console.log('newContact',e.target.value)
    // }

    // phoneONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newPhone: e.target.value
    //     })
    //     //    console.log('newPhone',e.target.value)
    // }

    // websiteONchange = (e) => {
    //     (e).preventDefault();
    //     this.setState({
    //         newWeb: e.target.value
    //     })
    //     //    console.log('newWeb',e.target.value)
    // }






    // showModal(){
    //     this.setState({show:!this.state.show})
    // }
    // updateFreelance=async(e,free_idx)=>{
    //     e.preventDefault();
    //     const reqBody={
    //         name:this.state.newName,
    //         skills:this.state.newSkills,
    //         bio:this.state.newBio,
    //         phone:this.state.newPhone,
    //         websiteUrl:this.state.newWeb,
    //        //  userEmail: this.props.auth0.user.email
    //     }
    //     console.log('beforUpdate',reqBody);
    //     const updateFreelanceUser=await axios.put(`http://localhost:8000/up-userfreelance/${free_idx}`,reqBody);
    //     console.log('afterUpdate',updateFreelanceUser.data);
    //     this.setState({
    //         dataformBack:updateFreelanceUser.data
    //     })



    // }



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
        return (
            <div>
                <Button variant="warning" onClick={this.showModal} >Update</Button>
                {this.state.showModal && (

                    <Modal show={this.state.showModal} onHide={this.handleclose}>
                        <Modal.Header closeButton>Update for:- {this.props.newName}</Modal.Header>
                        <Modal.Body>
                            <form id="formP" onSubmit={this.props.updateFreelance}>
                                <h3>Apply For Promotion</h3>
                                <label for="fname">Name</label><br />
                                <input type="text" id="fname" name="firstname" value={this.props.newName} placeholder={this.props.newName} onChange={this.props.nameONchange} />
                                <br />
                                <label for="skill">Skills</label><br />
                                <input type="text" id="fname" value={this.props.newSkills} placeholder={this.props.newSkills} onChange={this.props.SkillsONchange} />
                                <br />
                                <label for="bio">Bio</label><br />
                                <input type="text" id="fname" value={this.props.newBio} placeholder={this.props.newBio} onChange={this.props.BioONchange} />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                {/* <h3>Work Samples</h3> */}
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
                                <input type="text" id="fname" name="firstname" value={this.props.newPhone} placeholder={this.props.newPhone} onChange={this.props.phoneONchange} />
                                <br />
                                <label for="fname">Website Url</label><br />
                                <input required aria-required="true" type="text" id="fname" name="firstname" value={this.props.newWeb} placeholder={this.props.newWeb} onChange={this.props.websiteONchange} />
                                <br />
                                <br />
                                {/* <Button  class="btn btn-info" onClick={(e) => this.updateFreelance(e)} >Update</Button> */}
                                <Button type='submit'>Update</Button>

                            </form>
                            <Button variant="primary" onClick={this.handleclose}>
                                close
                            </Button>
                        </Modal.Body>
                    </Modal>
                )
                }





            </div>
        )
    }
}

export default Modelformforupdate
