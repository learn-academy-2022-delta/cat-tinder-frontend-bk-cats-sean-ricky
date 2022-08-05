import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <>
        <Navbar className="my-2">
          <NavbarBrand href="/">
            <img alt="logo" src="/logo-white.svg" style={{}} />
          </NavbarBrand>
        </Navbar>
      </>
    );
  }
}
export default Footer;
