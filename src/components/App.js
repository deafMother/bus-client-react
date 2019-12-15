import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import SignInSignUp from "./header/SignInSignUp";
function App() {
  return (
    <div className="App">
      <h1>
        <NavLink to="/">Welcome to the bus booking</NavLink>{" "}
      </h1>
      <Header />
      <Switch>
        <Route exact path="/registerLogin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;

// 1) implement login and logout feature
