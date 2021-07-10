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
            <div className='footer'>
                <p>DivGiG &copy; 2021</p>
                <p>Phone: 000-000-000</p>
                <FontAwesomeIcon icon={faFacebook} size="3x"/>
                <FontAwesomeIcon icon={faInstagram} className='icon'/>
                <FontAwesomeIcon icon={faTwitter} className='icon'/>
            </div>
        )
    }
}

export default Footer
