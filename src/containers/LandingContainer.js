import React, { Component } from 'react';

import RecipeModel from '../models/RecipeModel.js';

import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard.js';

class LandingContainer extends Component {
  // state
  state = {
    recipes: [],
    loading: false,
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
    
    this.setState({
      loading: true,
    });

    RecipeModel.searchRecipes(queryPlus).then( (response) => {
      console.log(response.data);
      this.setState({
        recipes: response.data.hits,
        loading: false,
      });
    }).catch( (error) => {
      console.log(`search recipes error`, error);
    });
  };

  // [] insert axios call here to get all recipes?

  render() {
    let loading = [];

    if (this.state.loading) {
      loading.push(
        <div>
          <Loading />
        </div>
      );
    };

    return (
      <div>
        {/* Search bar component */}
        <form action="/" method="GET" onSubmit={this.onSubmit}>
          <div className="field">
            <label htmlFor="search" className="my-label">Search for an ingredient: </label>
            <input type="text"
                    id="search"
                    className="input" />
            <button type="submit"
              aria-label="submit search"
              className="button is-primary">Submit</button>
          </div>
        </form>

        { loading }

        <div className="columns is-multiline recipe-wrapper">
          {/* iterate through all recipes from axios call to pass into recipe card */}
          {this.state.recipes.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe.label} />
          ))}        
        </div>
      </div>
    );
  }
}

export default LandingContainer;
