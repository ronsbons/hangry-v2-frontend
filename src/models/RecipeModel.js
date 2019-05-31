import axios from 'axios';

// [] endpoint will have to be atlas hosted mongodb
const endPoint = 'https://api.edamam.com/search?';
const appId = 'ed9e50d2';
const appKey = 'b5858adbdef15d7fa7b69b92cebe450e';

class RecipeModel {
  static searchRecipes(query){
    let request = axios.get(`${endPoint}q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=6`);
    return request;
  };
};

export default RecipeModel;