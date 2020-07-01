import React from "react";
import "./about.scss";
import node from "../../assets/node.png";
import js from "../../assets/js1.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png"

function About() {
  return (
    <>
      <div className="main__about" id="about">
        <div className="main__about__container">
          <h1 className="main__about--heading">ABOUT</h1>
          <h3 className="main__about--subheading">
            Hello, I’m Balkirat! I am a recent graduate in BrainStation’s Web
            Development Diploma Program. I am currently working as a freelancer
            and also looking for new employment opportunities. I enjoy building
            creative websites and learning new skills in Web Development.
            {/* <ReactTypingEffect
              className="typed-cursor"
              speed={100}
              staticText="Hi I'm"
              eraseDelay={1000}
              typingDelay={750}
              text={[" A Crickter", "A Web Developer"]}
            /> */}
          </h3>
        </div>
        <div className="wrap">
          <div className="wrap__cube">
            <div className="cube cube__front">
              <img className="cube__img" src={redux} alt="front"></img>
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
