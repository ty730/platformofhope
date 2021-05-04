import React from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
//import { Events } from './../Components/Events';

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
      </div>
    </div>
  );
}

export default NewsAndEvents;
