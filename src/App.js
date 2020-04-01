import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
