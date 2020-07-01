import React from "react";
import "./mobileNav.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const variants = {
  open: { y: 0 },
  closed: { y: "50%", transition: { delay: 200 } }
};

const mobileNav = props => {
  console.log("checj props", props);
  return (
    <motion.nav
      className="mobile-nav"
      variants={variants}
      initial="closed"
      animate={props.isNavOpen ? "open" : "closed"}
      transition={{ damping: 900 }}
    >
      <div className="mobile-nav__container">
        <Link
          activeClass="active"
          className="mobile-nav--link"
          style={{ textDecoration: "none" }}
          onClick={props.CloseClickHandler}
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
          onClick={props.CloseClickHandler}
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
          onClick={props.CloseClickHandler}
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
          onClick={props.CloseClickHandler}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact Me
        </Link>
      </div>
      <div className="mobile-nav__button">
        <button className="mobile-nav__button" onClick={props.CloseClickHandler}><FontAwesomeIcon className="mobile-nav__icon" icon={faTimes}/></button>
      </div>
    </motion.nav>
  );
};

export default mobileNav;
