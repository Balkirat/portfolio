import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__name">
            <h2>B/SINGH</h2>
          </div>
          <div className="header__nav">
            <Link className="header__nav--link" style={{ textDecoration: 'none' }} to="/about">About</Link>
            <Link className="header__nav--link" style={{ textDecoration: 'none' }} to="/Skill">Skill</Link>
            <Link className="header__nav--link" style={{ textDecoration: 'none' }} to="/Project">Project</Link>
            <Link className="header__nav--link" style={{ textDecoration: 'none' }} to="/Contact">Contact</Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
