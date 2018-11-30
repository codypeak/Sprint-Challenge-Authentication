import React, { Component } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import './App.css';

import Signup from './components/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
        </nav>
        <section>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);

