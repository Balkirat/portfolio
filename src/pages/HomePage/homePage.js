import React, { Component } from "react";
import "./homePage.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Header />
          <Hero />
        </div>
        <div className="test">
          <h1>TESTING</h1>
          <p className="test__text">lorem djl;fsg;fsg; jfsjk;sfgj;k</p>
        </div>

      </>
    );
  }
}

export default HomePage;
