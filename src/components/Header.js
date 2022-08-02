import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MML from '../assets/MML.jpg'

class Header extends Component {
    render() {
        return (
            <header>
              <NavLink to="/">
                <img src={MML}></img>
              </NavLink>
              <div className="nav-links">
                <ul>
                  <NavLink to="/catindex">Meet The Community</NavLink>
                </ul>
                <ul>
                  <NavLink to="/catnew">Join The Community</NavLink>
                </ul>
            </div> 
        </header>
        )
    }
}
export default Header