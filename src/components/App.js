import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';

// import other components
import Navbar from './Navbar.js';

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
        <Navbar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn} />
        <h1>Hangry</h1>
        <p>(insert search bar here)</p>

        {/* iterate through recipes and create recipe cards */}
      </div>
    );
  };
};

export default App;
