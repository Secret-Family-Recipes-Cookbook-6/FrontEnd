import React, { useState } from 'react';
import Signup from './components/Signup'
import Recipes from "./components/Recipes";
import RecipeForm from './components/RecipeForm';
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


  // const addNewRecipe = recipes => {
  //   const newRecipe = {
  //     id: Date.now(), // gives a unique id
  //     title: recipes.title, 
  //     body: recipes.body, 
  //     footer: recipes.footer
  //   }; 
  //   setRecipe([...recipe, newRecipe])
  // }
 //};

  return (
    <div className="App">
      <h1>Family Recipes</h1>
      {/*<NewRecipeForm  />
      <Recipes recipe={recipe} /> */}
    <secretFamilyContext.Provider value={{ recipe, setRecipe }}>
   // <Route exact path='/signup' component={Signup} />
    <Route exact path='/' component={LogIn}/>

    <ProtectedRoute exact path="/protected" component={RecipeForm} />
    <ProtectedRoute exact path='/protected' component={Recipes}/>
    
    </secretFamilyContext.Provider>
    </div>
  );
} 

  

export default App;