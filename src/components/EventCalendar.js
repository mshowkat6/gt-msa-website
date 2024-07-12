import React from 'react';
import './EventCalendar.css'

const EventCalendar = () => {
  return (
    <div>
        <div className='events-photo'>
            <img src="./images/events-1.JPG"  alt = 'event-img' />
            <h1 className = "events-header">
                    EVENTS
            </h1>
        </div>
        <div className='calendar'>
            <h1 className='upcoming-events'>Upcoming Events</h1>
            <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23e2ba06&mode=MONTH&showCalendars=0&showPrint=0&src=bWF5bXVuYWguc2hvd2thdEBnbWFpbC5jb20&color=%23039BE5"
            style={{ border: 'solid 20px #E2BA06' }}
            width="1200"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
            ></iframe>
        </div>
    </div>
  );
};

export default EventCalendar;
