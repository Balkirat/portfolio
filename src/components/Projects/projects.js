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
      pauseOnFocus: true,
    };
    return (
      <>
        <div className="project" id="projects">
          <h1 className="project__heading">PROJECTS</h1>
          <article className="project__container">
            <div className="project__individual">
              <div className="project__info">
                <h1 className="project__info--heading">myMovie</h1>
                <h3 className="project__info--subheading">
                  This project is very special to me. I made this in 10 days as
                  my capstone project and was created in React. myMovie tells
                  the user about trending movies and suggests movies based on
                  their mood. Users can watch trailers and also check to see if
                  the movie is available on Netflix. I made an advance search
                  (better filters) page to choose a movie, but it’s only
                  available to signed-in users. More features are coming soon...
                </h3>
                <h4 className="project__info--tech">
                  {" "}
                  React / Node.js / Express / MongoDB / OAuth/ The Movie
                  DataBase API / Rapid API
                </h4>
                <div className="project__info__links">
                  <a>
                    <button className="project__info__button project__info__button--red project__info__button--disabled ">
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
                </div>
              </div>
              <div className="project__images">
                <Slider {...settings}>
                  <div>
                    <img className="project__images--slider" src={home1}></img>
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
                    <img className="project__images--slider" src={search}></img>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="project__individual">
              <div className="project__info">
                <h1 className="project__info--heading">SORTING HAT</h1>
                <h3 className="project__info--subheading">
                  A simple react project based on an API I build with a friend
                  in 4 hours as a class challenge. It was a very fun project
                  with some cool animations and background music. It simply
                  takes your name and sorts it into a random Harry Potter House.
                </h3>
                <h4 className="project__info--tech">
                  {" "}
                  React / JavaScript / Sass / API
                </h4>
                <div className="project__info__links">
                  <a>
                    <button className="project__info__button project__info__button--red project__info__button--disabled ">
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
                </div>
              </div>
              <div className="project__images">
                <img className="project__images--slider" src={potter}></img>
              </div>
            </div>

            <div className="project__individual">
              <div className="project__info">
                <h2 className="project__info--heading">BRAINFLIX</h2>
                <h4 className="project__info--subheading">
                  This project is made using React, uses Node.js/Express RESTful
                  API features, and has a fully responsive front-end. Brainflix
                  mimics the Youtube UI and the user can upload a video or
                  comment on existing videos.
                </h4>
                <h4 className="project__info--tech">
                  {" "}
                  React / JavaScript / Sass / Node.js / Express
                </h4>
                <div className="project__info__links">
                  <a>
                    <button className="project__info__button project__info__button--red project__info__button--disabled ">
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
                </div>
              </div>
              <div className="project__images">
                <img className="project__images--slider" src={brainflix}></img>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }
}
export default Projects;
