import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        
        <Route path="/" exact component={Home}/>
        <Route path="/about"  exact component={About}/>
        <Route path="/service" exact component={Service}/>
        <Route path="/contact" exact component={Contact}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}
