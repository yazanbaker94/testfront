import React, { Component } from 'react';
import './Header.css';
import Home from './Home';
import { withAuth0 } from '@auth0/auth0-react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                {/* <nav >
                    <ul >
                        <li className="navBar">
                            <a className="Logo">DivGig</a>
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
                </nav> */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>My Favorite Books</Navbar.Brand>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    {this.props.isAuthenticated ? <LogoutButton /> : ''}
                </Navbar>
            </div>
        )
    }
};

export default withAuth0(Header);
