import React from 'react';
import './../App.css';
import Column from '../Components/Column';
import computerlab from './../images/services/computerlab.jpg';
import foodpantry from './../images/services/foodpantry.jpg';
import rentassistance from './../images/services/rentassistance.png';
import hotelroom from './../images/services/hotelroom.jpg';
import mainImage from './../images/services/services-main.png';
import jobWorkshops from './../images/services/job-workshops.png';
import missionWork from './../images/services/mission-work.png';
import sudsofhope from './../images/services/sudsofhope.jpg';
import resourceguide from './../images/services/resourceguide2023.png';
import mentalHealth from './../images/services/mentalhealth.jpg';
import { Helmet } from 'react-helmet';

/**
 * This is the Home component that holds all information for the Home page.
 */
function Services() {
  return (
    <div className="donate">
      <Helmet>
      <title>Services - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="donate-header">
        <h2>Services</h2>
        <p>
          Platform of Hope provides a host of services to enhance and transform
          lives of homeless families and individuals in Atlanta, Georgia and surrounding counties.
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
        title= "Food Pantry/Clothes Closet"
        p="Distributes non-perishables, personal essentials, coats and blankets to underserved families."
        imgclass="services-img" />
        <Column
        src={rentassistance}
        title= "Rent/Utility Assistance"
        p="We provide financial assistance to families facing eviction."
        imgclass="services-img" />
        <Column src={mentalHealth}
        title= "Mental Health"
        p="Beginning in 2025 POH Services will offer counseling and mental health assessments with Licensed Therapists."
        imgclass="services-img" />
        <Column src={hotelroom}
        title= "Hotel Voucher/Shelter Referral"
        p="We offer hotel assistance and shelter referrals upon available funding."
        imgclass="services-img" />
        <Column
        src={computerlab}
        title= "Reentry Services"
        p="We facilitate basic computer applications and job readiness in area jails then connect individuals with community partners for re-employment/second-chance employment."
        imgclass="services-img" />
        <Column
        src={jobWorkshops}
        title= "Job Workshops"
        p="We provide resume prep, application submission, job portal registration, free notary services to homeless clients, and free access to laptops."
        imgclass="services-img" />
        <Column src={missionWork}
        title= "Global Impact"
        p="Platform of Hope is expanding its reach beyond the U.S. to impact underserved children in Nairobi, Kenya. Through partnerships with two group homes caring for boys and girls ages 2 months to 16 years—a total of 75 parentless children—POH has partnered to provide essential learning and play materials, including backpacks, notebooks, pencils, pens, coloring and activity books, crayons, colored pencils, and soccer balls. Our commitment includes sending semi-annual bulk shipments to ensure children have necessary tools to learn, grow, and dream."
        imgclass="services-img" />
        <Column src={sudsofhope}
        title= "Suds of Hope"
        p="Platform of Hope-Suds of Hope offers safe, accessible showers at no cost to individuals experiencing homelessness."
        imgclass="services-img" />
        <Column src={resourceguide}
        title= "Resource Guide"
        p="Greater Atlanta's Critical Needs Guide. "
        imgclass="services-img" 
        hasLink={true} />
      </div>

    </div>
  );
}

export default Services;
