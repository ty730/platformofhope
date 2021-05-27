import React from 'react';
import './../App.css';
import Column from '../Components/Column';
import computerlab from './../images/computerlab.jpg';
import foodpantry from './../images/foodpantry.jpg';
import rentassistance from './../images/rentassistance.png';
import girlscouts from './../images/girlscouts.jpg';
import hotelroom from './../images/hotelroom.jpg';
import hands from './../images/hands.png';
import mainImage from './../images/services-main.png';

/**
 * This is the Home component that holds all information for the Home page.
 */
function Services() {
  return (
    <div className="donate">
      <div className="donate-header">
        <h2>Services</h2>
        <p>Platform of Hope strives to offer a host of services to enhance and
          transform lives of homeless families and individuals in Atlanta,
          Georgia and surrounding counties.
        </p>
        <hr/>
      </div>
      <img className="services-main" src={mainImage} alt="" />
      <div className="donate-header">
        <h3>What We Do</h3>
        <hr/>
      </div>
      <div className="column-container">
        <Column
        src={foodpantry}
        title= "Food Pantry/Coat Closet"
        p="We receive, buys, and distributes food, coats, and blankets to needy families."
        imgclass="services-img" />
        <Column
        src={rentassistance}
        title= "Rent/Utility Assistance"
        p="We provide financial assistance for needy and low-income families facing eviction."
        imgclass="services-img" />
        <Column src={hotelroom}
        title= "Hotel Voucher/Shelter Referral"
        p="We offer hotel assistance for homeless families in addition to shelter referrals."
        imgclass="services-img" />
        <Column
        src={computerlab}
        title= "Jail Facilitation"
        p="We facilitate basic computer apps and job readiness in area
        jails then partners with employers for second-chance employment."
        imgclass="services-img" />
        <Column
        src={girlscouts}
        title= "Girl Scouts"
        p="The first Platform of Hope Girl Scout troop will be formed very soon."
        imgclass="services-img" />
        <Column src={hands}
        title= "Mission Work"
        p="We serve yearly on mission trips to impact throughout the world."
        imgclass="services-img" />
      </div>

    </div>
  );
}

export default Services;
