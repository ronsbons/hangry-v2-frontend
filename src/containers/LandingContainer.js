import React, { Component } from 'react';

import RecipeModel from '../models/RecipeModel.js';

import RecipeCard from '../components/RecipeCard.js';

class LandingContainer extends Component {
  // state
  state = {
    recipes: [],
  };
  // component lifecycle methods

  // any other methods
  onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(event.target[0].value);
    let query = event.target[0].value
    let queryLowerCase = query.toLowerCase();
    let queryPlus = queryLowerCase.replace(' ', '+');
    console.log(queryPlus);

    RecipeModel.searchRecipes(queryPlus).then( (response) => {
      console.log(response.data);
      this.setState({
        recipes: response.data.hits,
      });
    }).catch( (error) => {
      console.log(`search recipes error`, error);
    });
  };

  // [] insert axios call here to get all recipes?

  render() {
    return (
      <div>
        {/* Search bar component */}
        <form action="/" method="GET" onSubmit={this.onSubmit}>
          <div className="field">
            <label htmlFor="search" className="label">Search for an ingredient: </label>
            <div className="control">
              <input type="text"
                      id="search"
                      className="input" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit"
                      aria-label="submit serach"
                      className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
        {/* iterate through all recipes from axios call to pass into recipe card */}
        {this.state.recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe.label} />
        ))}        
      </div>
    );
  }
}

export default LandingContainer;
