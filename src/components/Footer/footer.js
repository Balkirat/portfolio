import React from "react";
import "./footer.scss";
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
            <FontAwesomeIcon className="footer__icons--border" icon={faEnvelope} />
            <FontAwesomeIcon className="footer__icons--border" icon={faLinkedinIn} />
            <FontAwesomeIcon className="footer__icons--border" icon={faGithub} />
            <FontAwesomeIcon className="footer__icons--border" icon={faFile} />
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
