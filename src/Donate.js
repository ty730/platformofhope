import React from 'react';
import './App.css';
import Column from './Column';
import glare from './glare.jpg';
import cashapp from './images/cashapp.png';
import paypal from './images/paypal.png';
import givelify from './images/givelify.png';
import venmo from './images/venmo.png';

function Donate() {
  return (
    <div>
      <div className="home-image">
        <h1>Support Comes in Different Forms</h1>
      </div>
      <div className="column-container">
      <Column
        src={paypal}
        header= "PayPal"
        button={<button className="button">Donate</button>}
        imgclass="donate-img" />
      <Column
        src={cashapp}
        header= "Cashapp"
        button={<button className="button">Donate</button>}
        imgclass="donate-img" />
      <Column
        src={givelify}
        header= "Givelify"
        button={<button className="button">Donate</button>}
        imgclass="donate-img" />
      <Column
        src={venmo}
        header= "Venmo"
        button={<button className="button">Donate</button>}
        imgclass="donate-img" />
      </div>
    </div>
  );
}

export default Donate;
