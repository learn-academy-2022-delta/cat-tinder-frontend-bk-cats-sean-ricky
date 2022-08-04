import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MML from '../assets/MML.jpg'

class Header extends Component {
    render() {
        return (
         <header>
            <NavLink to="/">
                <img src={MML} alt="logo for MML" className="MML" />
            </NavLink>
            <div className="nav-links">
                <ul>

                    <li>
                        <NavLink to="/catindex">Meet The Community</NavLink>
                    </li>
                    <li>
                        <NavLink to="/catnew">Join The Community</NavLink>
                    </li>
                </ul>     
             </div> 
         </header>
 )} 
}
export default Header