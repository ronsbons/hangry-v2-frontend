import axios from 'axios';

// [] endpoint will have to be atlas hosted mongodb
const endPoint = 'https://api.edamam.com/search?';
const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_APP_KEY;

class RecipeModel {
  static searchRecipes(query){
    let request = axios.get(`${endPoint}q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=6`);
    return request;
  };
};

export default RecipeModel;