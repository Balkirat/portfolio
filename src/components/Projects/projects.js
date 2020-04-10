import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.scss";
import home from "../../assets/home.png";
import home1 from "../../assets/home1.png";
import find from "../../assets/find.png";
import find2 from "../../assets/find2.png";
import find3 from "../../assets/find3.png";
import contact from "../../assets/contact.png";
import login from "../../assets/titleSlide.png";
import search from "../../assets/search.png";
import potter from "../../assets/mockup.png";
import brainflix from "../../assets/brainflix2.png";

class Projects extends Component {
  render() {
    var settings = {
      className: "carousel",
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: true
    };
    return (
      <>
        <div className="project" id="projects">
          <h1 className="project__heading">PROJECTS</h1>
          <article className="project__container">
            <div className="project__info">
              <h1 className="project__info--heading">myMovie</h1>
              <h3 className="project__info--subheading">
                This Project is very very special to me. I made this in 10 days
                as my capstone project. myMovie is made in React that tells the
                user about trending movies, suggest movies based on Mood. User
                can watch trailer and also check that is the movie available on
                Netflix or not. I made advance search (better filters) page to
                choose a movie. But advance search page is only available to
                signed in Users. More features are coming
                soon....................
              </h3>
              <h4 className="project__info--tech">
                {" "}
                React / Node.js / Express / MongoDB / OAuth/ The Movie DataBase
                API / Rapid API
              </h4>
              <div className="project__info__links">
                <a>
                  <button className="project__info__button project__info__button--red">
                    Live
                  </button>
                </a>
                <a target="_blank" href="https://github.com/Balkirat/myMovie">
                  <button className="project__info__button project__info__button--red">
                    Git Repo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://www.loom.com/share/5d333033290c41f4a862d0c7819e5bb2"
                >
                  {" "}
                  <button className="project__info__button project__info__button--red">
                    Video
                  </button>
                </a>
                <a />
              </div>
            </div>
            <div className="project__images">
              <Slider {...settings}>
                <div>
                  <img className="project__images--slider" src={home1}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={find}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={find2}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={find3}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={search}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={login}></img>
                </div>
                <div>
                  <img className="project__images--slider" src={search}></img>
                </div>
              </Slider>
            </div>
          </article>
          <div>
            <article className="project2">
              <div className="project2__card">
                <div className="project2__image">
                  <img src={potter}></img>
                </div>
                <div className="project2__info">
                  <h2 className="project2__info--heading">SORTING HAT</h2>
                  <h4 className="project2__info--subheading">
                    A simple react project based on API I build this with a
                    friend in a 4 hours in a class challenge. It was a very fun
                    project with some cool animations and background music. it
                    just take your name and sort you into a random Harry Potter
                    House.
                  </h4>
                  <h4 className="project2__info--subheading project2__info--tech">
                    {" "}
                    React / JavaScirpt / Sass / API
                  </h4>
                </div>
              </div>
            </article>

            <article className="project2">
              <div className="project2__card project2__card--color">
                <div className="project2__info">
                  <h2 className="project2__info--heading">BRAINFLIX</h2>
                  <h4 className="project2__info--subheading">
                    This project is made using React, it also features a
                    Node.JS/Express RESTful API and a fully responsive
                    Front-end. The project mimics the Youtube UI and user can
                    upload a video and comment on existing videos.
                  </h4>
                  <h4 className="project2__info--subheading project2__info--tech">
                    {" "}
                    React / JavaScirpt / Sass / API
                  </h4>
                </div>
                <div className="project2__image">
                  <img
                    className="project2__image--bigger"
                    src={brainflix}
                  ></img>
                </div>
              </div>
            </article>
          </div>
        </div>
      </>
    );
  }
}
export default Projects;
