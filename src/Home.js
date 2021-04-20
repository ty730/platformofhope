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
import logo from './images/pohlogo.png';


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
      <div className="home-top">
        <div>
          <h3>Non-Profit Organization</h3>
          <h1>Helping One Family At A Time.</h1>
          <p>
          Platform of Hope is an initiative designed to feed, house, clothe, and
          employ homeless families while empowering and transforming lives of the
          economically disadvantaged. We are successfully providing support and
          restoring lives of homeless families in Atlanta, Georgia and surrounding
          counties. This includes facilitating with local jail prisons or
          correctional facilities and partnering them to employers for reemployment.
          </p>
          <button>Learn More</button>
        </div>
        <img src={logo} alt="logo" />
      </div>

      <div className="home-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,288L21.8,256C43.6,224,87,160,131,117.3C174.5,75,
                                                218,53,262,90.7C305.5,128,349,224,393,240C436.4,256,
                                                480,192,524,160C567.3,128,611,128,655,149.3C698.2,171,
                                                742,213,785,208C829.1,203,873,149,916,117.3C960,85,1004,
                                                75,1047,69.3C1090.9,64,1135,64,1178,74.7C1221.8,85,1265,
                                                107,1309,101.3C1352.7,96,1396,64,1418,48L1440,32L1440,
                                                0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,
                                                0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,
                                                0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,
                                                0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,
                                                0,22,0L0,0Z"></path>
  </svg>
      </div>
      {/* <div className="welcome">
        <h3>Who We Are</h3>
        <p>Platform of Hope is an initiative designed to feed, house, clothe, and employ homeless
        families while empowering and transforming lives of the economically disadvantaged.
        </p>
      </div>
    */}
      <div className="home-section">
        <div className="home-col-title">
          <h1>Together we can make a Difference</h1>
          <p>No matter how old you are, where you live, or what you can give, you can help those in need.</p>
          <div/>
        </div>
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
      {/* <h2 className="line-header">Thanks To Our Donors</h2>
      <div className="column-container home-page-top">
        <Column ></Column>
        <Column ></Column>
        <Column ></Column>
        <Column ></Column>
      </div> */}
    </div>
  );
}

export default Home;
