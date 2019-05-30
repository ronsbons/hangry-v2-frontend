import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';

// import other components

// import './App.css';

class App extends Component {
  // state

  // component lifecycle methods
  componentDidMount() {
    // test to connect to backend
    axios.get('http://localhost:3001/').then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <p>hello world</p>
    );
  };
};

export default App;
