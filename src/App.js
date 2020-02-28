import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/CreateAccount' component={CreateAccount}/>
    <Route path='/LogIn' component={LogIn}/>
    <ProtectedRoute exact path='/protected' component={Recipes}/>
    </>
  );
}

export default App;
