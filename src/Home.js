import React from 'react';
import './App.css';
import HomeColumn from './Components/HomeColumn/HomeColumn';
import handsheart from './images/home-icons/handsheart.png'
import holdhands from './images/home-icons/holdhands.png';
import prayinghands from './images/home-icons/prayingicon.png';
import { Row, Col } from 'react-bootstrap'
import logo from './images/pohlogo.png';
import { Events } from './Components/Events'
import UpcomingEvents from './Components/UpcomingEvents';


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
      imageLink: holdhands,
      title: "Lorem Ipsum",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque magnam similique nam aspernatur magni, omnis laboriosam. Sint vero quam fuga pariatur sit, accusamus nihil.",
      alt: "holding hands",
    },
    {
      imageLink: prayinghands,
      title: "Lorem Ipsum",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque magnam similique nam aspernatur magni, omnis laboriosam. Sint vero quam fuga pariatur sit, accusamus nihil.",
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
      <div className="home-section">
        <div className="home-col-title">
          <h1>Together we can make a Difference</h1>
          <p>No matter how old you are, where you live, or what you can give, you can help those in need.</p>
          <div />
        </div>
        <Row>
          {
            homeColumn.map(function (items) {
              return <HomeColumn
                title={items.title}
                paragraph={items.paragraph}
                image={items.imageLink} alt={items.alt}
              />
            })
          }
        </Row>
      </div>

      <div className="featuredEventsContainer">


        <div className="featuredEvents">
    
          <Row>
            <Col xl={8} lg={8} md={12}>
              <div className="upcomingEvents d-flex align-items-center justify-content-center">
                <Row>
              
                  <Col md={12} lg={6} sm={12} offset={3} className="d-flex align-items-center justify-content-center pb-md-4 flex-column">
               
                    <div className="upcomingEventsImage">
                    <h4 className="align-self-lg-start pb-lg-2 pl-0">Upcoming Events</h4>
                      <img src="https://images.pexels.com/photos/6646923/pexels-photo-6646923.jpeg?cs=srgb&dl=pexels-rodnae-productions-6646923.jpg&fm=jpg" alt="" />
                    </div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center flex-column" md={12} lg={6} sm={12}>
              
                    <div className="upcomingEventsList d-flex align-items-md-center justify-content-lg-center">

                               
                    {
                  Events.map(event=>(
                  
                   <a href="/"> <UpcomingEvents title={event.title} date={event.end.toString()} ></UpcomingEvents></a>
                  
                  ))
                 
                 } 
                 
                    </div>
                  </Col>
                </Row>
              </div>

            </Col>


            <Col xl={4} lg={4} className="pastEventsCol align-items-sm-center justify-sm-content-center d-flex flex-column align-items-xl-start">
             <h4 className="text-md-center  text-sm-center text-lg-left">Past Events</h4>
              <div className="pastEvents d-flex flex-column justify-content-center align-items-sm-center align-items-md-center align-items-lg-start align-items-xl-start">
               
                {
                  Events.map(event=>(
                  
                   <a href="/"> <UpcomingEvents title={event.title} date={event.end.toString()} ></UpcomingEvents></a>
                  
                  ))
                 
                 } 

              </div> 
      
            </Col>
          </Row>
        </div>

      </div>

    </div>
  );
}

export default Home;
