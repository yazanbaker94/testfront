import React, { Component } from 'react';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Router>
                        <Link to="/" className="Logo">DivGig</Link>
                        <Link to="/" className="navBar">Post Work</Link>
                        <Link to="/findtalent" className="navBar">Find Talent</Link>
                        <Link to="/contactus" className="navBar">Contact Us</Link>
                        <Link to="/" className="logIn">Log in</Link>
                    </Router>
                </Navbar>
            </div>
        )
    }
};

export default withAuth0(Header);
