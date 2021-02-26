import React, { useState } from "react";
import Base from "./components/Base";
import HomeAnimation from "./components/HomeAnimation";

import Menus from "./components/Menus";
import Project from "./components/Project";
import ThemeContext from "./context/ThemeContext";
const Portfolio = () => {
  // const themeHook = useState("light");
  return (
    <Base>
      <div className="container">
        <div class="d-flex flex-wrap">
          <Project
            title="Todo App With Local Storage"
            text="Beginer Level Project to get Start with React Js"
            linkTo="https://nameless-hamlet-00505.herokuapp.com/"
          ></Project>
          <Project
            title="Tic-Tac-Toe Game"
            text="Beginer Level Project to get Start with React Js"
            linkTo="https://arcane-plateau-94087.herokuapp.com/"
          ></Project>
          <Project
            title="UI Theme Changer"
            text="Beginer Level Project to get Start with React Js"
            linkTo="https://obscure-taiga-13293.herokuapp.com/"
          ></Project>
           <Project
            title="Github Search App"
            text="Medium Level Project to get Start with React Js and API handling"
            linkTo="https://damp-garden-44192.herokuapp.com/"
          ></Project>
        </div>
      </div>
    </Base>
  );
};

export default Portfolio;
