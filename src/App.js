import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "screens/Home";
import Vault from "screens/Vault";
import './normalize.css';

export default function BasicExample() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/vault">
            <VaultScreen />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

function HomeScreen() {
  return (
    <Home />
  );
}

function VaultScreen() {
  return (
    <Vault />
  );
}
