import React, { useState } from 'react';
import './../App.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      </div>
      <div className="calendar-container">
        <Calendar
          selectable={true}
          onSelectEvent={handleShow}
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
        <Modal show = {show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Test Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the description</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default NewsAndEvents;
