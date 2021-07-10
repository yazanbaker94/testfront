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
                <p>DivGiG &copy; 2021</p>
                <p>Phone: 000-000-000</p>
                <FontAwesomeIcon icon={faFacebook}/>
            </div>
        )
    }
}

export default Footer
