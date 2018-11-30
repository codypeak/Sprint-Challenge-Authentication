import React, { Component } from 'react';
import { Router, Switch, NavLink } from 'react-router-dom';
import './App.css';

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

export default App;
