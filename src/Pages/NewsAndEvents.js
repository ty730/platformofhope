import React from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

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
        style={{ height: 500 }}
      />
      </div>
    </div>
  );
}

export default NewsAndEvents;
