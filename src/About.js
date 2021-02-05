import React, { useState } from "react";
import Base from "./components/Base";
import ProfilePic from "./resources/img/pg4.png";

const About = () => {
  
  return (
    <Base>
      <div className="row">
        <div className="col-sm-6">
            <div className="container">
          <img src={ProfilePic}  className="img-fluid rounded img-thumbnail"></img>
          </div>
        </div>
        <div className="col-sm-6 p-2">
          <div className="jumbotron"> 
          <h3>About Me</h3>
          <span>I am Full Stack Web Developer and Flutter Enthusiast</span>
          <p class="mb-10">
            A passionate and enthusiastic Computer Science Student who loves to
            learn and implement the knowledge practically. Proficient in
            developing Backend functionalities of Web and Android Applications,
            looking to start the career as an entry-level Software Engineer with
            a reputed firm driven by technology.
          </p>
          <p>
            As a web developer I enjoy in making my website more detailed and
            useful. I always find the simple solution to problem statements.
          </p>
          <span>Current Focus:Flutter||Django||React-Js</span>
          <p>
            <a href="prajwalsResume.pdf" class="butn mt-30">
              View Resume
            </a>
          </p>
</div>        
        </div>
      </div>
    </Base>
  );
};

export default About;
