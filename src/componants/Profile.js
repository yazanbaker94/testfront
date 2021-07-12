import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import'./profile.css'


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
                email:"munther.abdlrahman@gmail.com",
                name: this.state.newName,
                skills: this.state.newSkills,
                bio: this.state.newBio,
                phone: this.state.newPhone,
                websiteUrl: this.state.newWeb,
            }

            const url = `http://localhost:8080/freelance`;
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
                        {/* <label for="bio">Your Website A :-  </label>
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
                        return
                        <>
                            <CardGroup>
                                <Card border="primary" style={{ width: '30px', display: 'inline-block', marginBottom: '200px' }}>
                                    <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{ width: '200px', marginTop: '35px', marginLeft: '20px' }} />
                                    <Card.Body style={{ height: '400px' }}>
                                        <Card.Title style={{ marginTop: '60px' }}>Name:{element.name} </Card.Title>
                                        <Card.Title style={{ marginTop: '60px' }}>Bio:</Card.Title>
                                        <Card.Title style={{ position: "absolute", top: '30px', left: '300px' }}>Skills:{element.skills}</Card.Title>
                                        {/* <Card.Title style={{position:"absolute",top:'100px',left:'300px'}}>Work Samples:</Card.Title> */}
                                        {/* <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'0px',position:"absolute",top:'150px',left:'300px'}} />
              <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'200px',position:"absolute",top:'150px',left:'400px'}}/>
              <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'400px',position:"absolute",top:'150px',left:'500px'}}/> */}
                                        <Card.Title style={{ position: "absolute", top: '400px', left: '300px' }}>Contact Info</Card.Title>
                                        <Card.Title style={{ position: "absolute", top: '500px', left: '300px' }}>Phone:{element.phone}</Card.Title>
                                        <Card.Title style={{ position: "absolute", top: '500px', left: '700px' }}>WebsiteUrl:{element.websiteUrl}</Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </>
                    })

                }





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


{/* <a href="http://localhost:3000/Profile" target="_blank">Grep!</a> */ }

