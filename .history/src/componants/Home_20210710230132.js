import React, { Component } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder' className="mainImage" />
                <h1>Some Paragraph
                </h1>
                <p>To Idintify The Website</p>
                <div></div>
                <h2>Why Div Gig</h2>
                <div className="firstInfo">
                    <ul>
                        <li>
                            <p>More information about the services we provide</p>
                        </li>
                        <li>
                            <p>More information about the services we provide</p>
                        </li>
                        <li>
                            <p>More information about the services we provide</p>
                        </li>
                        <li>
                            <p>More information about the services we provide</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>About Div Gig</h2>
                    <div className='about'>
                        <p>Some type of paraghraph that tells about our message and the reason and vision about creating this website and what we want to achieve with it </p>
                    </div>
                </div>
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder' className="rightImage" />
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder' className="mapImage" />
                <Footer />
            </div>
        )
    }
}

export default Home
