import ThemeContext from '../context/ThemeContext';
import HomeAnimation from './HomeAnimation';
import Menus from './Menus';
import React, { useEffect, useState, useContext } from "react";

const Base = (
    {
        children
    }
) => {
    const themeHook = useState("light");
    return ( 
        <ThemeContext.Provider value={themeHook}>
        
        <div>
        <Menus></Menus>
        <HomeAnimation></HomeAnimation>
        <div className="container">{children}</div>
    </div>

        </ThemeContext.Provider>
     );
}
 

export default Base;