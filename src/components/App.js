import React, { Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import SignInSignUp from "./header/SignInSignUp";
import SearchBox from "../components/searchBox/SearchBox";
//import BussesForDate from "./BussesForDate/BussesForDate";
const BussesForDate = React.lazy(() => import("./BussesForDate/BussesForDate"));
function App() {
  return (
    <div className="App">
      <h1>
        <NavLink to="/">Welcome to the bus booking</NavLink>{" "}
      </h1>
      <Header />
      <div className="main__page--grid">
        <Switch>
          <Route exact path="/" component={SearchBox} />
          <Route exact path="/registerLogin" component={SignInSignUp} />
        </Switch>
        <Suspense fallback={<h5>fetching bus info..</h5>}>
          <Route exact path="/" component={BussesForDate} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;

// 1) implement login and logout feature: done
