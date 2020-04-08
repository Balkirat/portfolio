import React, { Component } from "react";
import "./homePage.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import MobileNav from "../../components/MobileNav";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: true
    };
  }

 ToggleClickHandler = () => {
    this.setState(prevState => {
      return { mobileNavOpen: !prevState.mobileNavOpen }
    })
  }

  render() {
    return (
      <>
        <div id="main">
          <Header  ToggleClickHandler={this.ToggleClickHandler}/>
          {this.state.mobileNavOpen && <MobileNav />}
          <Hero />
        </div>
        <main className="main">
          <About/>
          <Projects />
          <Skills />
          <Footer />
        </main>
      </>
    );
  }
}

export default HomePage;
