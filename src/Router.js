import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const Hero = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};

export default Hero;
