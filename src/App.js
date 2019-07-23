import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import Navbar from "./components/Navigationbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop/" component={Products} />
        <Route exact path="/products/:shot" component={Detail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
