// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Recipes from "./components/Recipes";
import RecipeForm from "./components/RecipeForm";
//mimic fetching data from an API
import data from "./data";
import "./App.css";

function App() {
  
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Grandma's Baked Scones",
      body:
        "2 Cups of flour, 2 Cups of Brown Sugar, 1 Pound of Butter. Bake at 375 degrees for 1 Hour"
    }
  ]);

  
  const addNewRecipe = recipe => {
    const newRecipe = {
      id: Date.now(), // gives a unique id
      title: recipe.title, 
      body: recipe.body
    }; 
    setRecipes([...recipes, newRecipe])
  }
  return (
    <div className="App">
      <h1>Family Recipes</h1>
      <RecipeForm addNewRecipe={addNewRecipe} />
      <Recipes recipes={recipes} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
