import React, { useEffect, useState, useContext } from "react";
import Menus from "./components/Menus";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import HomeAnimation from "./components/HomeAnimation";
import ThemeContext from "./context/ThemeContext";
import TypedAnimation from "./components/TypedAnimation";
import About from "./About";
import SocialMedia from "./components/SocialMedia";
import Routes from './Routes';
import Base from "./components/Base";
// const preloader = () => {
//   return (
//     <div style={{ marginLeft: "45%", marginTop: "15%" }}>
//       <Loader
//         type="Puff"
//         color="#0ef98c"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//     </div>
//   );
// };

function App() {
   
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <Base>

      <div>  
      <TypedAnimation></TypedAnimation>
      <SocialMedia></SocialMedia>
      </div>   
          
    </Base>
  );
}

export default App;
