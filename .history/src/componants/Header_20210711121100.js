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

                <Router>
                    <Link to="/" className="Logo">DivGig</Link>
                    <Link to="/" className="navBar">Post Work</Link>
                    <Link to="/" className="navBar">Find Talent</Link>
                    <Link to="/" className="navBar">Contact Us</Link>
                    <Link to="/" className="logIn">Log in</Link>
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
                </Router>
            </div>
        )
    }
};

export default withAuth0(Header);
