import React from "react";
import background from "../../assets/heroImg.jpg";
import "./hero.scss";

function Hero() {
  return (
    <>
      <div className="hero">
        <img className="hero__background" src={background}></img>
        <div className="hero__text">
          <h1 className="hero__text--heading">Hi, <br></br> I'm Balkirat Singh
          <br></br>Full Stack Developer</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
