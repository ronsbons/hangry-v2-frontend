import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <img src={this.props.recipe.recipe.image} />
        <h1><a href={this.props.recipe.recipe.url}>{this.props.recipe.recipe.label}</a></h1>

        <h3>Ingredients: </h3>{this.props.recipe.recipe.ingredientLines.map(ingredient => (
          <p>{ingredient}</p>
        ))}
        
        <h3>Features: </h3>
        <h4>{this.props.recipe.recipe.dietLabels}, {this.props.recipe.recipe.healthLabels.join(', ')}</h4>
      </div>
    );
  }
}

export default RecipeCard;
