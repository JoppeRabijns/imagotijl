import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const Hero = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          exact
          path="/tickets"
          render={() =>
            (window.location =
              "https://ticketshop.ticketmatic.com/dommelhof/shop-4")
          }
        />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  );
};

export default Hero;
