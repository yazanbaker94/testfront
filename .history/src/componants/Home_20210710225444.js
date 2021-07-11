import React, { Component } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder' className="mainImage" />
                <h1>Some Paragraph
                    <span>To Idintify The Website</span>
                </h1>
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
                    <div>
                        <p>Some type of paraghraph that tells about our message and the reason and vision about creating this website and what we want to achieve with it </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
