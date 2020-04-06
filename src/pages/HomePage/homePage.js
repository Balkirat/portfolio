import React, { Component } from "react";
import "./homePage.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="main">
          <Header />
          <Hero />
        </div>
        <main className="main">
          <About/>
          <Projects />
          <Skills />
        </main>
      </>
    );
  }
}

export default HomePage;
