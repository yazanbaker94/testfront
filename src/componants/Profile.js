import React, { Component } from 'react'
// import { Image } from 'react-bootstrap'
import profile from './profile.css'
import Header from './Header'


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




        }
    }

    nameONchange = (e) => {
        (e).preventDefault();
        this.setState({
            newName: e.target.value
        })
           console.log('newName',e.target.value)
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
           console.log('urProject B',e.target.value)
    }

    urProjectONchangeC = (e) => {
        (e).preventDefault();
        this.setState({
            urProjectC: e.target.value
        })
           console.log('urProject C',e.target.value)
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











    render() {
        return (

        
            <>

<Header/>
                <h1 >User Info</h1>
                <section>
                    <h3 class="" class="nameM" >
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
                        <label for="bio">Your Website A :-  </label>
                        <input required aria-required="true"id="fname" class="input" id="email" name="E-mail" placeholder='Best of  Your website...' onChange={(e) => this.urProjectONchangeA(e)} />
                        <br />
                        <label for="bio">Your Website B :- </label>
                        <input required aria-required="true"id="fname" class="input" id="email" name="E-mail" placeholder='Best of  Your website...' onChange={(e) => this.urProjectONchangeB(e)} />
                        <br />
                        <label for="bio">Your Website C :-  </label>
                        <input required aria-required="true" id="fname" class="input" id="email" name="E-mail" placeholder='Your GitHub...' onChange={(e) => this.openPrimary(e)} />
                        <br />
                        <label class="label" for="url">Upload Url image for best project :-</label>
                        <input   class="input" id="url_txt" name="Url" type="url"  placeholder='Your Img Url...' required onChange={(e) => { this.imageONchange(e) }} />
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
                        <button>Premote yourself</button>
                    </form>
                </section>
            </>
        )
    }
}

export default Profile










 {/* <a  onChange={(e) => this.websiteONchange(e)}>
                            <button onclick="window.open(document.URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');" onClick={this.onclickPrimaryPro(e)}>
                            Your primary profiles
                            </button>
                        </a> */}


                        {/* <a href="http://localhost:3000/Profile" target="_blank">Grep!</a> */}

