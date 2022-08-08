import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import RSTECH from "../assets/RSTECH.png"

class Footer extends Component {
  render() {
    return (
      <>
        <Navbar className="my-2">
        <p>TRUST YOUR PROCESS</p>
          <NavbarBrand href="/">
          <img src={RSTECH} alt="logo for RS" className="RSTECH" />
          
          </NavbarBrand>
        </Navbar>
      </>
    );
  }
}
export default Footer;
