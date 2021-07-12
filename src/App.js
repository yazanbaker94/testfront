import React, { Component } from 'react'
import FindTalent from './FindTalent'
import ContactUs from './ContactUs'
import Home from './componants/Home';
import Profile from './componants/Profile'
import PostWork from './componants/PostWork'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(this.props.auth0)
    console.log(user);
    console.log(isAuthenticated );
    return (
      <>
        <Router>
            <Switch>
            <Route exact path="/">
             <Home/> 
              </Route>
              <Route exact path="/profile">
            <Profile/>
              </Route>
              <Route exact path="/postwork">
            <PostWork/>
              </Route>
              <Route exact path="/findtalent">
                <FindTalent />
              </Route>    
              <Route exact path="/contactus">
                <ContactUs/>
              </Route>               
            </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
