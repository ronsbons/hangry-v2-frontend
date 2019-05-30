import React, { Component } from 'react';

class LandingContainer extends Component {
  // state
  state = {
    recipes: [],
  };
  // component lifecycle methods

  // any other methods

  // [] insert axios call here to get all recipes?

  render() {
    return (
      <div>
        <h1>Hangry</h1>
        {/* Search bar component */}
        {/* iterate through all recipes from axios call to pass into recipe card */}
        {/* Recipe cards component */}
        
      </div>
    );
  }
}

export default LandingContainer;
