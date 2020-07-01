import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.scss";
import home1 from "../../assets/home1.png";
import find2 from "../../assets/find2.png";
import find3 from "../../assets/find3.png";
import search from "../../assets/search.png";
import potter from "../../assets/mockup1.png";
import brainflix from "../../assets/brainflix2.png";
import covid from "../../assets/Covid-19.png";
class Projects extends Component {
  render() {
    var settings = {
      className: "carousel",
      infinite: true,
      autoplay: true,
      dots: true,
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
                <h1 className="project__info--heading">MY MOVIE</h1>
                <h3 className="project__info--subheading">
                  React project that helps the user to find movies based on
                  their mood. Users can watch trailers and also check
                  availability of movies on Netflix. It has advance search page
                  to choose a movie, but it’s only available to signed-in users.
                  More features are coming soon...
                </h3>
                <h4 className="project__info--tech">
                  {" "}
                  React / Node.js / Express / MongoDB / OAuth/ The Movie
                  DataBase API / Rapid API
                </h4>
                <div className="project__info__links">
                  <a href="/">
                    <button className="project__info__button project__info__button--red project__info__button--disabled ">
                      Live
                    </button>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Balkirat/myMovie">
                    <button className="project__info__button project__info__button--red">
                      Git Repo
                    </button>
                  </a>
                  <a
                    target="_blank" rel="noopener noreferrer"
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
                  <img alt="my movie project" className="project__images--slider" src={home1}></img>
                  <img alt="my movie project" className="project__images--slider" src={find2}></img>
                  <img alt="my movie project" className="project__images--slider" src={find3}></img>
                  <img alt="my movie project" className="project__images--slider" src={search}></img>
                  <img alt="my movie project" className="project__images--slider" src={search}></img>
                </Slider>
              </div>
            </div>

            <div className="project__individual">
              <div className="project__info">
                <h1 className="project__info--heading">COVID-19 TRACKER</h1>
                <h3 className="project__info--subheading">
                  A fully responsive application made to track the total No. of
                  cases of coronavirus in the world. It visualize data in table
                  and card forms
                </h3>
                <h4 className="project__info--tech ">
                  {" "}
                  React / JavaScript / Sass / API / Chart.js / react-map-gl
                </h4>
                <div className="project__info__links">
                  <a target="_blank" rel="noopener noreferrer" href="https://covid-19-trac.netlify.app/">
                    <button className="project__info__button project__info__button--red  ">
                      Live
                    </button>
                  </a>
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://github.com/Balkirat/covid-19"
                  >
                    <button className="project__info__button project__info__button--red">
                      Git Repo
                    </button>
                  </a>
                </div>
              </div>
              <div className="project__images">
                <img alt="covid-19 movie project" className="project__images--slider" src={covid}></img>
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
              </div>
              <div className="project__images">
                <img alt="Sorting hat project" className="project__images--slider" src={potter}></img>
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
                  <a href="/"> 
                    <button className="project__info__button project__info__button--red project__info__button--disabled ">
                      Live
                    </button>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Balkirat/balkirat-singh-brainflix">
                    <button className="project__info__button project__info__button--red">
                      Git Repo
                    </button>
                  </a>
                  {/* <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.loom.com/share/5d333033290c41f4a862d0c7819e5bb2"
                  >
                    {" "}
                    <button className="project__info__button project__info__button--red">
                      Video
                    </button>
                  </a> */}
                </div>
              </div>
              <div className="project__images">
                <img alt="project brainflix" className="project__images--slider" src={brainflix}></img>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }
}
export default Projects;
