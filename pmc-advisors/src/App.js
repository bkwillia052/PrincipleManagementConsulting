import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="main-container">

      {/* NAV START */}
        <div className="nav-cont">

          <div className="nav-top">
            <img className="logo" src={require('./assets/imgs/PMC-logo.jpg')} alt="pmc-logo"/>
          </div>

          <div className="nav-red"></div>

          <nav className="nav-black">
            <div className="nav-btn">Home</div>
            <div className="nav-btn">About</div>
            <div className="nav-btn">Services</div>
            <div className="nav-btn">Contact</div>
          </nav>

      </div>
      {/* NAV END */}

      <HomePage />

      </div>
    );
  }
}

export default withRouter(App);
