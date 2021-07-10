import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faInstagram,
    faTwitter
 } from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    render() {
        return (
            <div>
                <img src='https://www.marwinvalve.com/wp-content/uploads/2018/04/placeholder-rectangle.png' alt='placeHolder'/>
                <p>DivGiG &copy; 2021</p>
                <p>Phone: 000-000-000</p>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
        )
    }
}

export default Footer
