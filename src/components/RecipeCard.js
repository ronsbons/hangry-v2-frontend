import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="column is-one-third is-half-mobile">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <h1><a href={this.props.recipe.recipe.url}>{this.props.recipe.recipe.label}</a></h1>
            </div>
          </div>


          <div className="card-image">
            <img src={this.props.recipe.recipe.image} />
          </div>

          <div className="card-content">
            <h3>Ingredients: </h3>{this.props.recipe.recipe.ingredientLines.map(ingredient => (
              <p>{ingredient}</p>
            ))}

            <h3>Features: </h3>
            <h4>{this.props.recipe.recipe.dietLabels}, {this.props.recipe.recipe.healthLabels.join(', ')}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
