import React, { useState, useEffect } from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Popup from './../Components/Popup';
//import { Events } from './../Components/Events';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './../images/image-1.jpg';
import img2 from './../images/image-2.jpg';
import videoThumb from './../images/inmates-graduate-thumb.JPG';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import testVideo from './../images/test.mp4';

const localizer = momentLocalizer(moment);

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

/**
 * This is the Home component that holds all information for the Home page.
 */
function NewsAndEvents() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setTitle(event.title);
    setDescription(event.start.toDateString());
  };

  const dummyEvents = [
    {
      allDay: false,
      end: new Date('May 10, 2021 11:13:00'),
      start: new Date('May 09, 2021 11:13:00'),
      title: 'Test Event',
    },
    {
      allDay: true,
      end: new Date('May 09, 2021 11:13:00'),
      start: new Date('May 09, 2021 11:13:00'),
      title: 'All Day Event',
    },
  ];

  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [thumbsSwiper, updateThumbsSwiper] = useState(null);

  const imageSrcs = [img1, img2, img1, img2]
  const slides = [];
  const thumbs = [];
  for (let i = 0; i < imageSrcs.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="slider-img" src={imageSrcs[i]} alt=""/>
      </SwiperSlide>
    );
    thumbs.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="slider-img" src={imageSrcs[i]} alt=""/>
      </SwiperSlide>
    );
  }
  slides.push(
    <SwiperSlide key={`slide-${6}`} tag="li">
      <iframe classname="slider-img" width="560" height="315" src="https://www.youtube.com/embed/wkZeEiLNLLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </SwiperSlide>
  );
  thumbs.push(
    <SwiperSlide key={`slide-${6}`} tag="li">
      <img className="slider-img" src={videoThumb} alt=""/>
    </SwiperSlide>
  );

  // Bind swiper and thumbs swiper
  useEffect(() => {
    if (swiper && thumbsSwiper) {
      swiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = swiper;
    }
  }, [swiper, thumbsSwiper]);

  return (
    <div>
      <div className="news-events-image">
        <h1>News & Events</h1>
        <h3>Stay updated with our latest events</h3>
      </div>
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar
          selectable={true}
          onSelectEvent={(event) => handleShow(event)}
          localizer={localizer}
          events={dummyEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          eventPropGetter={
            (event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: "#faa919",
                color: 'white',
                borderRadius: "0px",
                border: "none"
              };
              return {
                className: "",
                style: newStyle
              };
            }
          }
        />
        <Popup show={show} handleClose={handleClose} title={title} description={description} />
      </div>
      <div className="media-container">
        <h2>Media</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <hr/>
        <Swiper
          id="gallery"
          tag="section"
          wrapperTag="ul"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination
          onSwiper={updateSwiper} // Get swiper instance callback
        >
          {slides}
        </Swiper>
        <Swiper
          id="thumbs"
          onSwiper={updateThumbsSwiper} // Get swiper instance callback
          slidesPerView={5}
          slideToClickedSlide
          centeredSlides
        >
          {thumbs}
        </Swiper>
        <video controls><source src={testVideo}></source></video>
      </div>
    </div>
  );
}

export default NewsAndEvents;
