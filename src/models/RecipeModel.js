import axios from 'axios';

// [] endpoint will have to be atlas hosted mongodb
const endPoint = '';

class RecipeModel {
  static getAllRecipes(){
    let request = axios.get(`${endPoint}`);
    return request;
  };
};

