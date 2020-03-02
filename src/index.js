import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//mimic fetching data from an API
// import data from "./data";


const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement)
