import React, { Component } from 'react';
import Home from './Home';
import './Header.css';
import{
    Router,
    Link,
    Route,
}from 'react-router-dom'
import Home from './Home';

class Header extends Component {
    render() {
        return (
            <div>
                <nav >
                <Router>
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
                            <Link className="logIn">Log in</Link>
                        </li>
                    </ul>
                </Router>
                </nav>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </div>
        )
    }
}

export default Header
