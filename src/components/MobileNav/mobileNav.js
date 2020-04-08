import React from "react";
import "./mobileNav.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const mobileNav = props => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__container">
        <Link
          activeClass="active"
          className="mobile-nav--link"
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
          className="mobile-nav--link"
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
          className="mobile-nav--link"
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
          className="mobile-nav--link"
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
    </nav>
  );
};

export default mobileNav;
