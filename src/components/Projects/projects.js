import React from "react";
import "./projects.scss";

function Projects() {
  return (
    <>
      <div className="project" id="projects">
        <h1 className="project__heading">PROJECTS</h1>
        <article className="project__container">
          <div className="project__info">
            <h1 className="project__info--heading">myMovie</h1>
            <h3 className="project__info--subheading">
              This Project is very very special to me. I made this in 10 days as
              my capstone project. I love watching Netflix. So wanted make
              something similar. myMovie is made in React that tells the user
              about trending movies, suggest movies based on Mood. User can
              watch trailer and also check that is the movie available on
              Netflix or not. I did Oauth as well and have a special search
              (better filters) page to choose a movie. But advance search page
              is only available to signed in Users. More features are coming
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
                  Live Site
                </button>
              </a>
              <a>
                <button className="project__info__button project__info__button--red">
                  GitHub Repo
                </button>
              </a>
              <button className="project__info__button project__info__button--red">
                Video Demo
              </button>
            </div>
          </div>
          <div className="project__images"></div>
        </article>
      </div>
    </>
  );
}

export default Projects;
