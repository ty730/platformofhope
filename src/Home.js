import React from 'react';
import './App.css';
import InfoSection from './InfoSection';
import Column from './Column';
import glare from './glare.jpg';
import fakelogo from "./images/fakecompanylogo.jpg";
import seniorDeliveryFlyer from "./images/seniordeliverypohflyer.jpg";
import hands from "./images/handsholdinghouse.jpg";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="home-header">
          <h2>Platform of Hope</h2>
          <p>Non-Profit Organization</p>
          <h1>ONE FAMILY AT A TIME</h1>
          <p className="home-image-paragraph"></p>
        </div>
      </div>
      <div className="welcome">
        <h2>Welcome</h2>
        <p>Platform of Hope is an initiative designed to feed, house, clothe, and employ homeless
          families while empowering and transforming lives of the economically disadvantaged.
        </p>
      </div>
      <InfoSection
      header="The POH Difference"
      p="While other agencies look great on paper, thousands of dollars go toward bonuses to
      employees each year. Fortunately, while Platform of Hope awaits state and federal funding,
      every dime is allocated TO the client for stabilization. We rely heavily on donations from
      family, friends, and the community for services and operating costs."
      p2="Platform of Hope is 501(c)(3) approved as of April 2017."
      src={hands}/>
      <InfoSection
      reverse="reverse flyer"
      header="Request a Free Senior Mobile Delivery"
      p="Are you over the age of 55?
      Are you low in food and essentials?
      Are you impacted by COVID-19?
      If yes, please request Free Mobile Delivery below."
      src={seniorDeliveryFlyer}
      button={<button>Request Help</button>}/>
      <h2 className="line-header">Thanks To Our Donors</h2>
      <div className="column-container home-page-top">
        <Column ></Column>
        <Column ></Column>
        <Column ></Column>
        <Column ></Column>
      </div>
    </div>
  );
}

export default Home;
