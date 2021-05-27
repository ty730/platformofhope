import React, { useState } from 'react';
import './../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import Popup from './../Components/Popup';
//import { Events } from './../Components/Events';

const localizer = momentLocalizer(moment);

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
      <h2>Media</h2>
    </div>
  );
}

export default NewsAndEvents;
