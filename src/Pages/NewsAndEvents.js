import React, { useState, useEffect, useRef } from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Popup from './../Components/Popup';
//import { Events } from './../Components/Events';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './../images/image-1.jpg';
import img2 from './../images/image-2.jpg';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

const localizer = momentLocalizer(moment);

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, Thumbs]);

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

  const gallerySwiperRef = useRef(null);
  const thumbnailSwiperRef = useRef(null);

  useEffect(() => {
    const gallerySwiper =  gallerySwiperRef?.current?.swiper;
    const thumbnailSwiper = thumbnailSwiperRef?.current?.swiper;
    if (gallerySwiper?.controller && thumbnailSwiper?.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, []);

  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageSrcs = [img1, img2, img1, img2, img1, img2]
  const slides = [];
  for (let i = 0; i < imageSrcs.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img className="slider-img" src={imageSrcs[i]} alt=""/>
      </SwiperSlide>
    )
  }

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
          tag="section"
          wrapperTag="ul"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination
          thumbs={{ swiper: thumbsSwiper }}
        >
          {slides}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          slidesPerView={4}
          freeMode={true}
          slideToClickedSlide
          centeredSlides
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsAndEvents;
