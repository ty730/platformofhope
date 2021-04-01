import React from 'react';
import './App.css';
import InfoSection from './Components/InfoSection';
import Column from './Components/Column';
import seniorDeliveryFlyer from "./images/seniordeliverypohflyer.jpg";
import hands from "./images/handsholdinghouse.jpg";
import HomeColumn from './Components/HomeColumn/HomeColumn';
import handsheart from './images/home-icons/handsheart.png'
import holdhands from './images/home-icons/holdhands.png';
import prayinghands from './images/home-icons/prayingicon.png';
import { Row } from 'react-bootstrap'


/**
 * This is the Home component that holds all information for the Home page.
 */
function Home() {

  const homeColumn = [
   {
      imageLink: handsheart,
      title: "Lorem Ipsum",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque magnam similique nam aspernatur magni, omnis laboriosam. Sint vero quam fuga pariatur sit, accusamus nihil.",
      alt: "hands with heart"

    },
     {
      imageLink:  holdhands,
      title:  "Lorem Ipsum",
      paragraph:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque magnam similique nam aspernatur magni, omnis laboriosam. Sint vero quam fuga pariatur sit, accusamus nihil.",
      alt: "holding hands",
    },
    {
      imageLink:  prayinghands,
      title:  "Lorem Ipsum",
      paragraph:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque magnam similique nam aspernatur magni, omnis laboriosam. Sint vero quam fuga pariatur sit, accusamus nihil.",
      alt: "praying hands"
    }

   ];


  return (
    <div className="home">
      <div className="home-container">
      </div>
      {/* <div className="welcome">
        <h3>Who We Are</h3>
        <p>Platform of Hope is an initiative designed to feed, house, clothe, and employ homeless
        families while empowering and transforming lives of the economically disadvantaged.
        </p>
      </div>
    */}
      <div className="home-section">
          <Row>
          {
              homeColumn.map(function(items)
              {
                return <HomeColumn 
                title={items.title} 
                paragraph={items.paragraph} 
                image={items.imageLink} alt={items.alt}
                />
              })
            }
          </Row>
        </div>
      <div className="home-data">
        <Column title="100+" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur."></Column>
        <Column title="100+" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur."></Column>
        <Column title="100+" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur."></Column>
        <Column title="100+" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur."></Column>
      </div>
      <InfoSection
        title="The POH Difference"
        p="While other agencies look great on paper, thousands of dollars go toward bonuses to
      employees each year. Fortunately, while Platform of Hope awaits state and federal funding,
      every dime is allocated TO the client for stabilization. We rely heavily on donations from
      family, friends, and the community for services and operating costs."
        p2="Platform of Hope is 501(c)(3) approved as of April 2017."
        src={hands} />
      <InfoSection
        reverse="reverse flyer"
        title="Request a Free Senior Mobile Delivery"
        p="Are you over the age of 55?
      Are you low in food and essentials?
      Are you impacted by COVID-19?
      If yes, please request Free Mobile Delivery below."
        src={seniorDeliveryFlyer}
        button={<button>Request Help</button>} />
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
