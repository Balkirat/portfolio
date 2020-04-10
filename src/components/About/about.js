import React from "react";
import Cube from "react-3d-cube";
import "./about.scss";
import html from "../../assets/html.png";
import node from "../../assets/node.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";

function About() {
  return (
    <>
      <div className="main__about" id="about">
        <div className="main__about__container">
        <h1 className="main__about--heading">ABOUT</h1>
          <h3 className="main__about--subheading">Hello, I'm Balkirat!
            I am recent graduate in web dev diploma program from BrainStation. I
            am currently working as freelancer and also looking for new
            employment oppurtunities. I enjoy buidling creative websites and
            always learning new skills in Web Development.
            </h3>
        </div>
        <div className="wrap">
          <div className="wrap__cube">
            <div className="cube cube__front">
              <img className="cube__img" src={html} alt="front"></img>
            </div>
            <div className="cube cube__right">
              <img className="cube__img" src={js} alt="right"></img>
            </div>
            <div className="cube cube__left">
              <img className="cube__img" src={node} alt="left"></img>
            </div>
            <div className="cube cube__back">
              <img className="cube__img" src={react} alt="back"></img>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
