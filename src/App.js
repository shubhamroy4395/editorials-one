import React from "react";
import ReactGA from 'react-ga'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, Nav, About, Contact, Article, Error } from "./components";
import "./App.css";
const trackingId = "UA-173147903-1"; 
function initializeAnalytics(){
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/Home')
}
const App = () => {
  initializeAnalytics()
  return (
    <>
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Article} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/error" exact component={Error} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
