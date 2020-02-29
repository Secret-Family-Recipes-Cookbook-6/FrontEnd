import React, { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import CreateAccount from './components/CreateAccount/CreateAccount';
import LogIn from './components/Login/LogIn';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header/Header";
import "./App.css";



function App() {
  return (
    <>
    <Header />
    
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/CreateAccount' component={CreateAccount}/>
    <Route exact path='/' component={LogIn}/>
    <Route path='/Recipes' component={Recipes}/>
    </>
  );
}

export default App;
