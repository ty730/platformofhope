import React from 'react';
import './App.css';
import Column from './Column';
import glare from './glare.jpg';

function About() {
  return (
    <div className="App">
      <div className="home-image">
        <h1>About Us</h1>
      </div>
      <div>
        <h2><span>Our Story</span></h2>
        <p>
        Platform of Hope was started in 2016 by a single mother passionate
        about enhancing the lives of others. The platform is driven by a desire
        to impact and fulfill a mission that omits greed and focuses on the
        needs of the homeless population. After a combined 20 years of working
        for corporate America, non-profits and GA Dept. of Family & Children
        Services Doris defied odds, used her personal savings and started
        Platform of Hope in a two-room store front in Decatur, GA.
        </p>
        <p>
        **501C3 approved as of April 2017**
        </p>
      </div>
      <div>
        <h2 className="decorated"><span>Our Process</span></h2>
        <p>
          Phase I
          Due to the lack of current funding, services from Platform of Hope
          are being introduced in phases. During the first phase services
          consist of a food pantry and coat/cap/blanket closet. Based on
          funding, clients also receive assistance with prescriptions and
          transportation to/from work.
        </p>
      </div>
      <div className="column-container">
        <Column
        src={glare}
        header= "Phase I"
        p="Due to the lack of current funding, services from Platform of Hope
        are being introduced in phases. During the first phase services consist
        of a food pantry and coat/cap/blanket closet. Based on funding, clients
        also receive assistance with prescriptions and transportation to/from
        work." />
        <Column
        src={glare}
        header= "Phase II"
        p="In addition to the food pantry and clothes closet enhancement,
        Phase II introduces a much more aggressive approach to stabilization
        and will incorporate a small dormitory-style 25-bed shelter for women
        and children.  " />
        <Column src={glare}
        header= "Phase III"
        p="The final phase of Platform of Hope will introduce numerous services
        surrounding the shelter such as Supportive employment, transportation
        services, educational assistance, GED/typing classes, Federal/State
        benefits application assistance, daycare resources, HIV testing,
        Address and mail service and much more. " />
      </div>

    </div>
  );
}

export default About;
