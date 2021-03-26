import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
