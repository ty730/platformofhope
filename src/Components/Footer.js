import React from 'react';
import './../App.css';
import facebookicon from "./../images/facebookicon.png";
import instagramicon from "./../images/instagramicon.png";
import twittericon from "./../images/twittericon.png";

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>770-767-0200</li>
          <li>info@platformofhope.org</li>
          <li>P.O. Box 48198</li>
        </ul>
      </div>
      <div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/platformofhope1" target="_blank" rel="noopener noreferrer">
            <img src={facebookicon} alt="Facebook" className="facebook"/>
          </a>
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
            <img src={twittericon} alt="Twitter" className="icon"/>
          </a>
          <a href="https://www.instagram.com/platform_of_hope/" target="_blank" rel="noopener noreferrer">
            <img src={instagramicon} alt="Instagram" className="instagram"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
