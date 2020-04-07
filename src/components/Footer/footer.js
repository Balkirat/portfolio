import React from "react";
import "./footer.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <>
      <div className="footer" id="contact">
        <h1 className="footer__heading">CONTACT ME</h1>
        <div className="footer__container">
          <div className="footer__icons">
        <a><FontAwesomeIcon className="footer__icons--border" icon={faEnvelope} /></a>
        <a target="_blank" style={{ textDecoration: "none" }}  href="http://www.linkedin.com/in/balkirat-singh" ><FontAwesomeIcon className="footer__icons--border" icon={faLinkedinIn} /></a>
        <a target="_blank" style={{ textDecoration: "none" }} href="https://github.com/Balkirat"><FontAwesomeIcon className="footer__icons--border" icon={faGithub} /></a>
        <a><FontAwesomeIcon className="footer__icons--border" icon={faFile} /></a>
            <h2>Made with ❤️ in React</h2>
          </div> 
          <div className="footer__details">
            <h1>Balkirat Singh</h1>
            <h3>Email: cheemaballu@gmail.com</h3>
            <h3>Toronto, Canada</h3>
            <p>
              {" "}
              <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
              2020 Balkirat Singh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
