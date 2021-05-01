import React from 'react'
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div className="navbar">
           <ul>
              <li><NavLink activeClassName="nav-active" className="nav-item" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="nav-active" className="nav-item" exact to="/daily">Daily</NavLink></li>
              <li><NavLink activeClassName="nav-active" className="nav-item" exact to="/hour">Hourly</NavLink></li>
           </ul>
        </div>
    )
}

export default Nav
