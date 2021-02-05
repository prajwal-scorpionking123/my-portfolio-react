import React, { useContext } from "react";
import Typical from "react-typical";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";
import Typed from "react-typed";
const TypedAnimation = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  const [appTheme, setAppTheme] = useContext(ThemeContext);
  return (
    <div className="container-fluid">
      <p
         style={{
            fontSize: "30px",
            color: `${currectTheme.textColor}`,
          }}
      >
        Hi, I'm Prajwal Patil
      </p>
    
    <h1 style={{
          fontWeight:"bold",
          color: `${currectTheme.textColor}`,
        }}>
        I'm
        <Typed style={{padding:"5px"}}
          strings={["Full Stack MERN Developer", "Flutter Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
    </h1>
    
    </div>
  );
};

export default TypedAnimation;
