import React from 'react';
import './../App.css';
import Column from '../Components/Column';
import computerlab from './../images/computerlab.jpg';
import foodpantry from './../images/foodpantry.jpg';
import rentassistance from './../images/rentassistance.png';
import girlscouts from './../images/girlscouts.png';
import hotelroom from './../images/hotelroom.jpg';
import hands from './../images/hands.png';

/**
 * This is the Home component that holds all information for the Home page.
 */
function Services() {
  return (
    <div>
      <div className="home-image">
        <h1>Services</h1>
      </div>
      <div className="column-container">
        <Column
        src={foodpantry}
        header= "Food Pantry/Coat Closet"
        p="POH receives, buys and distributes food, coats and blankets to needy families."
        imgclass="services-img" />
        <Column
        src={rentassistance}
        header= "Rent/Utility Assistance"
        p="~financial assistance for needy and low income families facing eviction."
        imgclass="services-img" />
        <Column src={hotelroom}
        header= "Hotel Voucher/Shelter Referral"
        p="~hotel assistance for homeless families in addition to shelter referrals."
        imgclass="services-img" />
      </div>
      <div className="column-container">
        <Column
        src={computerlab}
        header= "Jail Facilitation"
        p="POH facilitates Basic Computer Apps and Job Readiness in area jails
        then partners with employers for second-chance employment."
        imgclass="services-img" />
        <Column
        src={girlscouts}
        header= "Girl Scouts"
        p="The first POH Girl Scout troop will be formed Spring of 2020."
        imgclass="services-img" />
        <Column src={hands}
        header= "Mission Work"
        p="POH serves yearly on mission trips to impact throughout the world"
        imgclass="services-img" />
      </div>

    </div>
  );
}

export default Services;
