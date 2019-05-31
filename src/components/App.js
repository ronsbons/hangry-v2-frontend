import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';

// import other components
import LandingContainer from '../containers/LandingContainer.js';

// import './App.css';

class App extends Component {
  // state
  state = {
    isLoggedIn: false,
  }

  // component lifecycle methods
  componentDidMount() {
    // test to connect to backend
    axios.get('http://localhost:3001/').then(response => {
      console.log(response.data);
    });
  };

  // change state to isLoggedIn false
  handleLogout = (event) => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // axios call to get all recipes

  render() {
    return (
      <div className="app-container">
        <h1>Hangry</h1>

        <div className="component-container">
          <Route exact path="/"
                  render={() => {
                    return <LandingContainer />
                  }} />
        </div>
      </div>
    );
  };
};

export default App;
