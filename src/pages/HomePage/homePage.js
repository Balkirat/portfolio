import React, { Component } from "react";
import "./homePage.scss";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import MobileNav from "../../components/MobileNav";
import Loading from "../../components/Loading";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: false,
      isNavOpen: false,
      isLoaded: false,
    };
  }

  ToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        mobileNavOpen: !prevState.mobileNavOpen,
        isNavOpen: !prevState.isNavOpen,
      };
    });
  };

  CloseClickHandler = () => {
    this.setState({
      mobileNavOpen: false,
      isNavOpen: false,
    });
  };

  render() {
    return (
      <>
        <div id="main">
          <Header ToggleClickHandler={this.ToggleClickHandler} />
          {this.state.mobileNavOpen && (
            <MobileNav
              CloseClickHandler={this.CloseClickHandler}
              isNavOpen={this.state.isNavOpen}
            />
          )}
          <Hero />
        </div>
        <main className="main">
          <About />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </>
    );
  }
}

export default HomePage;
