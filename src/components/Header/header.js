import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./header.scss";

class Header extends Component {
  render() {
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
            ><h2>B/Singh</h2></Link>
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
              to="Skill"
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
              to="project"
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
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Me
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
