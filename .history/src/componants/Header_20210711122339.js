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
            <Router>
                                <Link to="/" className="Logo">DivGig</Link>

        
                                <Link to="/">Post Work</Link>

   
                                <Link to="/" >Find Talent</Link>

  
                                <Link to="/" >Contact Us</Link>


                                <Link to="/" className="logIn">Log in</Link>

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
