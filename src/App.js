import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import Loading from "./components/Loading";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Loading />
        </div>
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
