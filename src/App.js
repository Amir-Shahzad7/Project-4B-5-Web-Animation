import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Pages } from "./Components";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Pages} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  )
}

export default App;
