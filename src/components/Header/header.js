import React, { Component } from "react";
import { Link } from "react-scroll";
import "./header.scss";
import HamburgerButton from "../HamburgerButton";

class Header extends Component {
  render(props) {
    return (
      <>
        <header className="header">
          <div className="header__name">
            <Link
              activeClass="active"
              className="header__nav--link"
              style={{ textDecoration: "none" }}
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <h2 className="header__logo">B/Singh</h2>
            </Link>
          </div>
          <div className="header__nav">
            <Link
              activeClass="active"
              className="header__nav--link"
              style={{ textDecoration: "none" }}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              className="header__nav--link"
              style={{ textDecoration: "none" }}
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              className="header__nav--link"
              style={{ textDecoration: "none" }}
              to="skill"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              className="header__nav--link"
              style={{ textDecoration: "none" }}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Me
            </Link>
          </div>
          <div className="header__hamburger">
              <HamburgerButton click={this.props.ToggleClickHandler} />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
