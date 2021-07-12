import axios from 'axios';
import React, { Component } from 'react';
import './profile.css';
import Profilecard from './Profilecard';
// import { Image } from 'react-bootstrap'

import Header from './Header'
import Findtalent from './Findtalentcard';



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
        }
    }

    nameONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newName: e.target.value
        })
        console.log('newName', e.target.value)
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
        console.log('urProject B', e.target.value)
    }

    urProjectONchangeC = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectC: e.target.value
        })
        console.log('urProject C', e.target.value)
    }

    imageONchange = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectC: e.target.value
        })
        //    console.log('image',e.target.value)
    }


    openPrimary = (e) => {
        (e).preventDefault();
        this.setState({
            // urProjectC: e.target.values
        })

    }
    onclickPrimaryPro = (e) => {
        (e).preventDefault();
        window.location.href = "http://localhost:3000/Profile";

    }


    // componentDidMount = async () => {
    //     // if (this.props.auth0.isAuthenticated) {
    //     //   this.props.auth0.getIdTokenClaims()
    //     //     .then(async(res) => {
    //     //       const jwt = await res.__raw;
    //     //       const config = {
    //     //         headers: { "Authorization": `Bearer ${jwt}`,"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": true, 'Content-Type': 'application/json', 'mode': 'no-cors' },
    //     //         method: 'get',
    //     //         baseURL: 'http://localhost:8080',
    //     //         url: '/authorize'
    //     //       }
    //     //       axios(config)
    //     //         .then(axiosResults => console.log(axiosResults.data))
    //     //         .catch(err => console.error(err));
    //     //     })
    //     //     .catch(err => console.error(err));
    //     // }

    //     // let email = this.props.auth0.user.email
    //     // console.log('email',email)
    //     const url = `http://localhost:8080/test?email=munther.abdlrahman@gmail.com`;
    //     axios.get(url).then(response => {
    //         console.log('previous data', response);
    //         this.setState({
    //             dataformBack: response.data
    //         })
    //     })


    // }
    postFreelance = (e) => {
        (e).preventDefault();
        try {
            const reqBody = {
                email: "munther.abdlrahman@gmail.com",
                name: this.state.newName,
                skills: this.state.newSkills,
                bio: this.state.newBio,
                phone: this.state.newPhone,
                websiteUrl: this.state.newWeb,
            }

            const url = `http://localhost:8000/freelance`;
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

    render() {
        return (
            <>
            
                <Header />
                <h1 >User Info</h1>
                <section>
                    <h3 class="nameM" >
                        Name: jhony deep
                    </h3>
                    <h3 id="firstH" class="nameM" >
                        Email:zxy@mail.com
                    </h3>
                    <img class="ImgH" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308458-stock-illustration-unknown-person-silhouette-profile-picture.jpg" alt="person" />
                </section>
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
                </section>
                {
                    this.state.dataformBack.map((element, index) => {
                        return <Profilecard name={element.name} bio={element.bio} skills={element.skills} phone={element.phone} websiteUrl={element.websiteUrl} />
                    })
                }
            </>
        )
    }
}

export default Profile


