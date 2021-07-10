import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav >
                    <ul >
                        <li className="navBar">
                            <a className="Logo">DivGig</a>
                        </li>
                        <li className="navBar">
                            <a>Post Work</a>
                        </li>
                        <li>
                            <a>Find Talent</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Log in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
