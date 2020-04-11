import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route component={HomePage} />
          </Switch>
        </Router>

      </>
    );
  }
}

export default App;
