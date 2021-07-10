import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav >
                    <ul >
                        <liclassName="navBar">
                            <a className="Logo">DivGig</a>
                        </li>
                        <li>
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
