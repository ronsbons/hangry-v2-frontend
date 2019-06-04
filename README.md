# Hangry v2
## Overview
Hangry v2 began as a refactor of a [previous group project](https://project-hangry.herokuapp.com/) written in Python.  My original intention was to rebuild it using JavaScript and React, but unfortunately due to time, I had to scale back.

Hangry v2 is currently a personal concept project to quickly show a user recipes based on an ingredient.  I wanted to create this project to practice using an external API and to continue working with React.

Original project for reference: [Hangry app](https://project-hangry.herokuapp.com/), [GitHub repo](https://github.com/ch264/hangry)

## Technologies Used
Languages
- HTML
- CSS
- JavaScript

Frameworks
- Bulma.css

Libraries
- React.js

Packages
- axios

External API
- Edamam

## Installation
There is no backend associated with this project yet.

To utilize the external API, you will need to register for the [Edamam Recipe Search API](https://developer.edamam.com/edamam-recipe-api) to receive an app id and app key and substitute yours into the axios call written in the RecipeModel.js file.

You can run this application locally by cloning this repo, installing its dependencies, and running `npm start`.

## User Stories and Wireframes
User stories and wireframes can be found at this project's [Trello board](https://trello.com/b/zjNzd5QR/wdi-51-alumni-project), including plans for a larger scope version of the planned Hangry refactor.

## Future Features
- Improved styling
- Full refactor of Hangry including my own backend server and database
- Atlas hosted MongoDB
- User registration and authorization
- Search functionality of user's created recipes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).