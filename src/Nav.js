import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import logo from "./images/pohlogo.JPG";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
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
    </nav>
  );
}

export default Nav;
