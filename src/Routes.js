import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./About"
import Contact from './Contact';
import Portfolio from './Portfolio';
const Routes =() => {
    return ( 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/About" exact component={About} />
        {/* <Route path="/Contact" exact component={Contact} /> */}
        <Route path="/Portfolio" exact component={Portfolio} />

      </Switch>
    </BrowserRouter>
     );
}
 
export default Routes;