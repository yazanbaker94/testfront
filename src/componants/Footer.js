



import React, { Component } from 'react';
import './Footer.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { 
//     faFacebook,
//     faInstagram,
//     faTwitter
//  } from "@fortawesome/free-brands-svg-icons";




class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p className='paragraph'>DivGiG &copy; 2021</p>
                <p className='paragraph'>Phone: 000-000-000</p>

                {/* <FontAwesomeIcon icon={faFacebook}  className="icon" size="3x"/>
                <FontAwesomeIcon icon={faInstagram} className="icon" size="3x"/>
                <FontAwesomeIcon icon={faTwitter} className="icon" size="3x"/> */}
            </div>

        )
    }
}


export default Footer
