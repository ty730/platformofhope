import React from 'react';
import './App.css';
import InfoSection from './InfoSection';
import Column from './Column';
import glare from './glare.jpg';
import holdinghands from "./images/holdhands.png";
import prayhands from "./images/prayhands.png";
import hearthands from "./images/handsheart.png";
import fakelogo from "./images/fakecompanylogo.jpg";

function Home() {
  return (
    <div>
      <div className="home-image">
        <h1>Platform of Hope</h1>
      </div>
      <div className="column-container home-page-top">
        <Column
        src={holdinghands}
        header= "Working Together"
        p="Platform of Hope is founded on volunteer service and it is volunteerism
        that allows us to provide top-quality assistance!"
        imgclass="services-img" />
        <Column
        src={prayhands}
        header= "Our Hope"
        p="Platform of Hope is driven by a desire to impact and fulfill a mission
        that omits greed and focuses on the needs of the homeless population."
        imgclass="services-img" />
        <Column src={hearthands}
        header= "How You Can Help"
        p="Visit our Donate page to help feed, house, clothe and employ homeless families.
        Or contact us by phone or email to discuss ways you can volunteer."
        imgclass="services-img" />
      </div>
      <InfoSection
      header="What We Do"
      p="Platform of Hope is an initiative designed to feed, house,
      clothe and employ homeless families while empowering and transforming
      lives of the economically disadvantaged."
      src={glare}/>
      <InfoSection
      reverse="reverse"
      header="Who We Help"
      p="Are you over the age of 55?
      Are you low in food and essentials?
      Are you impacted by COVID-19?
      If yes, please request Free Mobile Delivery below."
      src={glare}
      button={<button>Request Help</button>}/>
      <h2 className="line-header">Thanks To Our Donors</h2>
      <div className="column-container home-page-top">
        <Column src={fakelogo}></Column>
        <Column src={fakelogo}></Column>
        <Column src={fakelogo}></Column>
        <Column src={fakelogo}></Column>
      </div>
    </div>
  );
}

export default Home;
