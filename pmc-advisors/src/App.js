import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router";
import { Route, Switch, Redirect, NavLink, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faChessKnight,
  faChessBishop
} from "@fortawesome/free-solid-svg-icons";

library.add(faChessRook);
library.add(faChessKnight);
library.add(faChessBishop);
class App extends Component {
  render() {
    return (
      <div className="main-container">
        {/* NAV START */}
        <div className="nav-cont">
          <div className="nav-top">
            <img
              className="logo"
              src={require("./assets/imgs/PMC-logo.jpg")}
              alt="pmc-logo"
            />

            <nav className="nav-black">
              <Link to="/">
                <div className="nav-btn">Home</div>
              </Link>
              <Link to="/about">
                <div className="nav-btn">About</div>
              </Link>
              <Link to="/services">
                <div className="nav-btn">Services</div>
              </Link>
              <Link to="/contact">
                <div className="nav-btn">Contact</div>
              </Link>
            </nav>
          </div>
        </div>
        {/* NAV END */}

        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path="/about" render={props => <AboutPage {...props} />} />
        <Route path="/services" render={props => <ServicesPage {...props} />} />
        <Route path="/contact" render={props => <ContactPage {...props} />} />

        <footer> PMC Advisors 2019 | Contact: 917-972-6579 </footer>
      </div>
    );
  }
}

export default withRouter(App);
