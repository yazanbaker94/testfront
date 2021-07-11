import React, { Component } from 'react';
import './Header.css';
import Home from './Home';
import {
    Router,
    Switch,
    Route,
    Link
}

class Header extends Component {
        render() {
            return (
                <div>
                    <nav >
                        <ul >
                            <li >
                                <Router className="navBar">
                                    <Link to="/" className="Logo">DivGig</Link>
                                </Router>
                            </li>
                            <li className="navBar">
                                <a>Post Work</a>
                            </li>
                            <li className="navBar">
                                <a>Find Talent</a>
                            </li>
                            <li className="navBar">
                                <a>Contact Us</a>
                            </li>
                            <li className="navBar">
                                <a className="logIn">Log in</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )
        }
    }

export default Header
