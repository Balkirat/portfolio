import React from "react";
import "./hamburger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const hamburgerButton = props => {
  return(
  <button className="toggle-button">
    <FontAwesomeIcon id="hamburger-icon" icon={faBars} onClick={props.click} />
  </button>
  )};

export default hamburgerButton;
