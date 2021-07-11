import React, { Component } from 'react';
import './Header.css';
// import Home from './Home';
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
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li className="navBar">
                                <Link to="/" className="Logo">DivGig</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/">Post Work</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" >Find Talent</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" >Contact Us</Link>
                            </li>
                            <li className="navBar">
                                <Link to="/" className="logIn">Log in</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
};

export default withAuth0(Header);
