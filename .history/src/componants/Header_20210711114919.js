import React, { Component } from 'react';
import './Header.css';
import Home from './Footer';
import{
    Router,
    Route,
    Switch,
    Link
}from 'react-router-dom'


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
                        <Home />
                    </Route>
                    <Route exact path='/postWork'>
                        <Home />
                    </Route>
                    <Route exact path='/findTalent'>
                        <Home />
                    </Route>
                    <Route exact path='/findTalent'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Header
