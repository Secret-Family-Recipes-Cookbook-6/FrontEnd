import React, { useState } from 'react';
import Recipes from "./components/Recipes";
import { secretFamilyContext } from "../src/context/secretFamilyContext";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import ProtectedRoute from "./components/ProtectedRoute";
import NewRecipeForm from "./components/NewRecipeForm";
import "./App.css";

const App = () => {
  const [recipe, setRecipe] = useState([{
    id: "",
    title: "",
    body: "",
    footer: "" 
  }])

  return (
    <>
    <secretFamilyContext.Provider value={{ recipe, setRecipe }}>
    <Route exact path='/' component={LogIn}/>

    <ProtectedRoute exact path="/protected" component={NewRecipeForm} />
    <ProtectedRoute exact path='/protected' component={Recipes}/>
    
    </secretFamilyContext.Provider>
    </>
  );

  //   const [recipes, setRecipes] = useState([
  //   {
  //     id: 1,
  //     title: "Cheese Crackers",
  //     body:
  //       "2 Cups Of Assorted Cheeses, Grated Generously, Spread Over Crackers", 
  //       footer: "Aunt Mary"
  //   }
  // ]);

  // const addNewRecipe = recipe => {
  //   const newRecipe = {
  //     id: Date.now(), // gives a unique id
  //     title: recipe.title, 
  //     body: recipe.body, 
  //     footer: recipe.footer
  //   }; 
  //   setRecipes([...recipes, newRecipe])
  // }

  //   return (
  //       <div className="App">
  //           <h1>Family Recipes</h1>
  //           <RecipeForm addNewRecipe={addNewRecipe} />
  //           <Recipes recipes={recipes} />
  //       </div>
  //   );
};

export default App;