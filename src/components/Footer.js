import React ,{useContext}from 'react';
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";
import  {FaEnvelope, FaPhone} from "react-icons/fa";
const Footer = () => {
    const theme = useContext(ThemeContext)[0];
    const currectTheme = AppTheme[theme];
    const [appTheme, setAppTheme] = useContext(ThemeContext);
    return ( 
        <footer style={{position: "fixed",left:0,bottom:"0",width:"100%"}} className={`footer bg-${appTheme} mt-auto py-3`}>
      <div  className={`container-fluid text-${appTheme==="light"?"dark":"light"} text-center py-3`}>
        <h6></h6>
       
      </div>
      <div className="container">
        <span className={`text-${appTheme==="light"?"dark":"light"} py-3`}>
          Developed By Prajwal Patil    feel free to reach out! <FaEnvelope></FaEnvelope> prajwal.u.patil@gmail.com <FaPhone></FaPhone> 9657871360
        </span>
      </div>
    </footer>
     );
}
 
export default Footer;