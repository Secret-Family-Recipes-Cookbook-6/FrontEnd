import React, { useState } from 'react';
import Signup from './components/Signup'
import RecipeList from "./components/RecipeList";
import RecipeForm from './components/RecipeForm';
import { secretFamilyContext } from "../src/context/secretFamilyContext";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";


const App = () => {
  const [recipes, setRecipes] = useState([{
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    image: "",
    category: ""
  }])

  return (
    <div className="App">
      <h1>Family Recipes</h1>
    <secretFamilyContext.Provider value={{ recipes, setRecipes }}>
    <Route exact path='/' component={Signup} />
    <Route exact path='/login' component={LogIn}/>
      {/* Change to protected Routes once a token is in place */}
    <ProtectedRoute exact path='/protected' component={RecipeList} />
   <ProtectedRoute exact path="/protected" component={RecipeForm} />

  </secretFamilyContext.Provider>
  </div> 
  
  );
} 

  

export default App;