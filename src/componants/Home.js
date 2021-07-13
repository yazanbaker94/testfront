import React, { Component } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';
import './Home.css'
import { withAuth0 } from '@auth0/auth0-react';



class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <img src='/1.jpg' alt='trianglr' className='mainTraingle' />
                <h1>DEV GIG
                </h1>
                <p className='divgigInfo'> Find Great Talent.Build Your Business.Take Your Carrer To The Next Level</p>
                <div className='line'></div>
                <section>
                    <h2>Why Dev Gig</h2>
                    <div className="firstInfo">
                        <ul>
                            <li>
                                <p className="info">Meet clients you're excited to work with and take your carrer or business to new heights.</p>
                            </li>
                            <li>
                                <p className="info">Work with the largest network of independent professionals and get things done.</p>
                            </li>
                            <li>
                                <p className="info">From quick turnarounds to big transformations.</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className='line2'></div>
                <div className='thirdSection'>
                    <h2>About Dev Gig</h2>
                    <div className='about'>
                        <p> Freelance website where any developer can promote their profile/works and be able to find
                            and search for jobs and job offers and apply that are coming from the online  </p>
                    </div>
                </div>
                <img src='/4.png' alt='placeHolder' className="rightImage" />
                <img src='/4.png' alt='placeHolder' className="middleImage" />
                <img src='/4.png' alt='placeHolder' className="leftImage" />
                <img src='/3.png' alt='placeHolder' className="mapImage" />
                <img src='/5.png' alt='placeHolder' className="imageGirl" />
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Home);
