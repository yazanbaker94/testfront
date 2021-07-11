import React, { Component } from 'react';
import './Header.css';
import Home 
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
                    <Router className="navBar">
                        <Link to="/" className="Logo">DivGig</Link>
                        <Link to="/" className="navBar">Post Work</Link>
                        <Link to="/" className="navBar">Find Talent</Link>
                        <Link to="/" className="navBar">Contact Us</Link>
                        <Link to="/" className="navBar">Log in</Link>
                    </Router>
                    <Switch>
                    <Route exact path='/'>
                    <Home/>
                    </Route>
                    </Switch>
                    // <li className="navBar">
                    //     <a>Post Work</a>
                    // </li>
                    // <li className="navBar">
                    //     <a>Find Talent</a>
                    // </li>
                    // <li className="navBar">
                    //     <a>Contact Us</a>
                    // </li>
                    // <li className="navBar">
                    //     <a className="logIn">Log in</a>
                    // </li>
                </div>
            )
        }
    }

export default Header
