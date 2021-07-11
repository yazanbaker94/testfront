import React, { Component } from 'react'
import FindTalent from './FindTalent'
import ContactUs from './ContactUs'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
            <Switch>
            <Route exact path="/">
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

export default App
