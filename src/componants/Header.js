import React, { Component } from 'react';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';


import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton'
import LogOutButton from './LogOutButton';



class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        console.log(this.props.auth0)
        console.log(user);
        console.log(isAuthenticated);
        return (
            <div>
                <Navbar>

                    <Link to="/"> <img src='/logo.png' alt='logo' className="Logo"/></Link>
                    <Link to="/" className="navBar">Post Work</Link>
                    <Link to="/findtalent" className="navBar">Find Talent</Link>
                    <Link to="/contactus" className="navBar">Contact Us</Link>
                    {isAuthenticated ? <Link to="/profile" className="navBar">Profile</Link> : ''}
                    {isAuthenticated ? <LogOutButton  className='logIn'/> : <LoginButton  />}

                </Navbar>
            </div>
        )
    }
};

export default withAuth0(Header);
