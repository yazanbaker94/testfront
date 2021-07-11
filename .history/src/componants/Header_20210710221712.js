import React, { Component } from 'react';
import Header from './Css/Header';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <li>
                        <a>DivGig</a>
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
                </nav>
            </div>
        )
    }
}

export default Header
