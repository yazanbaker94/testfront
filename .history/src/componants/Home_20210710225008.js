import React, { Component } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder'/>
                <Footer/>
            </div>
        )
    }
}

export default Home
