import React from 'react';
import './../App.css';
import {Link} from "react-router-dom";
import logo from "./../images/pohlogowithwords.png";
;

/**
 * This is the Nav component with the logo in the top left and navigation links across the right.
 * The navigation links route to the corresponding pages as defined in the top level App component.
 */
function Nav() {
  return (
    <nav >
      <div className="nav">
        <img src={logo} alt="Logo" className="logo"/>
        
        <ul className="nav-links">
          <Link className="nav-link nav-link-ltr" to="/">
            <li className="">Home</li>
          </Link>
          <Link className="nav-link nav-link-ltr" to="/about">
            <li>About</li>
          </Link>
          <Link className="nav-link nav-link-ltr" to="/services">
            <li>Services</li>
          </Link>
          <Link className="nav-link nav-link-ltr" to="/newsandevents">
            <li>News & Events</li>
          </Link>
          <Link className="donate-btn" to="/donate">
            <li>Donate</li>

          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;