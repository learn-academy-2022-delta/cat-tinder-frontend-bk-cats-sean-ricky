import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MML from "../assets/MML.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/">
          <img src={MML} alt="logo for MML" className="MML" />
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/catedit">SIGN IN</NavLink>
          </ul>
          <ul>
            <NavLink to="/catindex">MEET THE UNIVERSE</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">JOIN THE UNIVERSE</NavLink>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
