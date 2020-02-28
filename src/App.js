import React, {useState} from 'react';
import {Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import Recipes from './components/Recipes';


function App() {
  return (
    <>
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/CreateAccount' component={CreateAccount}/>
    <Route path='/LogIn' component={LogIn}/>
    <Route path='/Recipes' component={Recipes}/>
    </>
  );
}

export default App;
