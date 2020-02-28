import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import LogIn from './components/LogIn';
import Recipes from './components/Recipes';
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";



function App() {
  return (
    <>
    <Header />
    
    <Route path='/LandingPage' component={LandingPage}/>
    <Route path='/CreateAccount' component={CreateAccount}/>
    <Route exact path='/' component={LogIn}/>
    <ProtectedRoute exact path='/protected' component={Recipes}/>
    </>
  );
}

export default App;
