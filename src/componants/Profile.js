import axios from 'axios';
import React, { Component } from 'react';
import './profile.css';
import Profilecard from './Profilecard';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Modelformforupdate from './Modelformforupdate';
import Header from './Header';


export class Profile extends Component {

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
            showUpdateForm: false,
            index: 0

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

    showUpdateForm = (idx) => {
        const newArr = this.state.dataformBack.filter((value, index) => {
            return idx === index
        });

        this.setState({
            index: idx,
            newName: newArr.name,
            newSkills: newArr.skills,
            newBio: newArr.bio,
            newPhone: newArr.phone,
            newWeb: newArr.websiteUrl,
            showUpdateForm: true
        })
    };

    updateFreelance = async (e) => {
        e.preventDefault();
        const bodydata = {
            name: this.state.newName,
            skills: this.state.newSkills,
            bio: this.state.newBio,
            phone: this.state.newPhone,
            websiteUrl: this.state.newWeb,
            email: 'softwaredohanow@gmail.com'
        }
        const updateFreelanceUser = await axios.put(`http://localhost:3001/userfreelance/${this.state.index}`, bodydata)
        this.setState({
            dataformBack: updateFreelanceUser.data
        })
    };


    componentDidMount = async () => {

        let email = 'softwaredohanow@gmail.com'
        console.log('email', email)
        const url = `http://localhost:3001/userfreelance?email=softwaredohanow@gmail.com`;
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
                email: "softwaredohanow@gmail.com",
                name: this.state.newName,
                skills: this.state.newSkills,
                bio: this.state.newBio,
                phone: this.state.newPhone,
                websiteUrl: this.state.newWeb,
            }


            const url = `http://localhost:3001/userfreelance`;

            axios.post(url, reqBody).then(response => {
                console.log('new data', response.data);
                console.log('reqBody', reqBody)
                this.setState({
                    dataformBack: response.data

                })
            })
        } catch (error) {
            console.log('error', error.message)
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
            email: 'softwaredohanow@gmail.com'
        }
        await axios.delete(`http://localhost:3001/userfreelance/${free_idx}`, { params: qureyParams })



    }

    render() {
        return (
            <>

                <Header />

                <Modelformforupdate nameONchange={this.nameONchange} SkillsONchange={this.SkillsONchange} BioONchange={this.BioONchange} phoneONchange={this.phoneONchange} websiteONchange={this.websiteONchange}
                    skills={this.state.newSkills} bio={this.state.newBio} phone={this.state.newPhone} websiteUrl={this.state.newWeb} updateFreelance={this.updateFreelance} />
                <h1 >User Info</h1>
                {
                    this.props.auth0.isAuthenticated &&
                    <>
                        <section>
                            <h3 class="nameM" >
                                Name:{this.props.auth0.user.name}
                            </h3>
                            <h3 id="firstH" class="nameM" >
                                Email:{this.props.auth0.user.email}
                            </h3>
                            <img class="ImgH" src="{this.props.auth0.user.picture}" alt="person" />
                        </section>
                    </>
                }


                <br />
                <br />
                <br />
                <br />
                <section>
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

                </section>
                {
                    this.state.dataformBack.map((element, index) => {
                        return <>
                            <Profilecard name={element.name} bio={element.bio} skills={element.skills} phone={element.phone} websiteUrl={element.websiteUrl} />
                            <Button variant="danger" onClick={() => this.deleteFreelance(index)}>Delete</Button>
                            <Button variant="warning" onClick={() => this.showUpdateForm(index)} class='button'> Freelance User Selector</Button>
                        </>
                    })
                }


            </>
        )
    }
}

export default withAuth0(Profile)


