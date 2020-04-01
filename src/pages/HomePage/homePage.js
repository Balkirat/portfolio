import React, { Component } from "react";
import "./homePage.scss";
import Header from "../../components/Header"
import Hero from "../../components/Hero";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Header />
        <Hero />   
      </>
    );
  }
}

export default HomePage;
