import React from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import img1 from './../images/image-1.jpg';
import img2 from './../images/image-2.jpg';

const localizer = momentLocalizer(moment);

SwiperCore.use([Navigation, Pagination]);

/**
 * This is the Home component that holds all information for the Home page.
 */
function NewsAndEvents() {
  const dummyEvents = [
    {
      allDay: false,
      end: new Date('March 10, 2021 11:13:00'),
      start: new Date('March 09, 2021 11:13:00'),
      title: 'hi',
    },
    {
      allDay: true,
      end: new Date('March 09, 2021 11:13:00'),
      start: new Date('March 09, 2021 11:13:00'),
      title: 'All Day Event',
    },
  ];
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
      <div className="home-image">
        <h1>News & Events</h1>
      </div>
      <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={dummyEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      </div>
      <div>
        <Swiper
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsAndEvents;
