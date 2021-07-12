import React, { Component } from 'react';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton'
import LogOutButton from './LogOutButton';
import ContactUs from '../ContactUs';


class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        console.log(this.props.auth0)
        console.log(user);
        console.log(isAuthenticated);
        return (
            <div>
                <Navbar>


                    <Link to="/" className="Logo">DivGig</Link>
                    <Link to="/postwork" className="navBar">Post Work</Link>
                    <Link to="/findtalent" className="navBar">Find Talent</Link>
                    <Link to="/contactus" className="navBar">Contact us</Link>
                    {isAuthenticated ? <Link to="/profile" className="navBar">Profile</Link> : ''}
                    {isAuthenticated ? <LogOutButton /> : <LoginButton />}

                </Navbar>
            </div>
        )
    }
};

export default withAuth0(Header);
