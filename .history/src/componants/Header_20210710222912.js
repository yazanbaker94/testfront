import React, { Component } from 'react';
import './Header.css';
import{
    Router,
    Link,
}from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Router>
                <nav >
                    <ul >
                        <li className="navBar">
                            <Link className="Logo">DivGig</Link>
                        </li>
                        <li className="navBar">
                            <Link>Post Work</Link>
                        </li>
                        <li className="navBar">
                            <Link>Find Talent</Link>
                        </li>
                        <li className="navBar">
                            <Link>Contact Us</Link>
                        </li>
                        <li className="navBar">
                            <Link className="logIn">>Log in</Link>
                        </li>
                    </ul>
                </nav>
                </Router>
            </div>
        )
    }
}

export default Header
