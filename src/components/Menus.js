import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";
import "../App.css";
import logoDark from "../resources/img/logo-dark1.png"
import logoLight from "../resources/img/logo-light.png"
import { Redirect, Link ,withRouter} from "react-router-dom";

const currentTab = (history, path,theme) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: theme };
  }
};

const Menus = ({history}) => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  const [appTheme, setAppTheme] = useContext(ThemeContext);
  console.log(appTheme);

  
  return (
    <div className="container">
      <header className={appTheme==="light"?"shadow-md p-3 mb-5 rounded":"shadow-md p-3 mb-5 rounded"}>
        <nav
          className={`navbar navbar-expand-lg navbar-${appTheme}`}
          aria-label="Eighth navbar example"
          style={{backgroundColor:`${currectTheme.navColor}`,color:`${currectTheme.textColor}`}}
        >
          <div className="container">
            {/* <a className="navbar-brand" href="#">
              Prajwal
            </a> */}
            {appTheme==="light"?<img className="navbar-brand" style={{height:"70px"}} src={logoDark} />:<img className="navbar-brand" style={{height:"70px"}} src={logoLight} />} 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" style={currentTab(history, "/",currectTheme.textColor)} to="/" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={currentTab(history, "/About",currectTheme.textColor)} to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={currentTab(history, "/Portfolio",currectTheme.textColor)} to="/Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={currentTab(history, "/Contact",currectTheme.textColor)} to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link" >
                    {appTheme==='light'?"Switch to Dark":"Switch to Light"}
                  </span>
                </li>
                <li>
                  <label class="switch nav-item">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setAppTheme(appTheme === "light" ? "dark" : "light");
                      }}
                    />
                    <span class="slider round"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Menus);
