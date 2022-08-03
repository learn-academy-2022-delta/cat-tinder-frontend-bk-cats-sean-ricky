import React, { Component } from 'react'
import {Navbar, NavbarBrand,} from 'reactstrap'

class Footer extends Component {
    render() {
        return (
         <>
         <Navbar
          className="my-2"
          color="dark"
          dark
          >
          <NavbarBrand href="/">
          <img alt="logo" src="/logo-white.svg"
           style={{
           height: 40,
           width: 40
        }}
        />
        Reactstrap
        </NavbarBrand>
        </Navbar>
        </>
  )
 }
}
export default Footer