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
        <div className='event-types'>
            <h1 className='type-header'>What Type Of Events Do We Host?</h1>
            <div className='social'>
              <img src="./images/bonfire.JPG" alt='bonfire-img' className='type-img' />
              <div className='event-text'>
                <h1 className='event-header' alt = 'social-header'>Social Gatherings</h1>
                <p className='event-caption' alt = 'social-caption'>
                The MSA hosts a diverse array of social events, including an MSA monthly where members meet every month participate in engaging challenges and activities. Our events encompass a wide range of interests, from creative craft sessions to lively outdoor adventures. 
                We also organize exclusive activities tailored specifically for sisters and brothers, ensuring everyone has the chance to connect and have fun in a comfortable setting. Join us for these fun social gatherings to make new friends, unwind, and create lasting memories.
                </p>
              </div>
            </div>
            <div className='religion'>
              <div className='event-text'>
                <h1 className='event-header' alt = 'religion-header'>Scholarly Sessions</h1>
                <p className='event-caption' alt = 'religion-caption'>We host a variety of enriching religious events throughout the year. These include insightful halaqas led by esteemed scholars who provide valuable perspectives on various aspects of Islam. 
                  Attendees have the unique opportunity to engage with these scholars directly, asking questions and participating in meaningful discussions. 
                </p>
              </div>
              <img src="./images/whisper.jpg" alt='whisper-img' className='type-img' />
            </div>
            <div className='education'>
              <img src="./images/ed-pic.JPG" alt='ed-img' className='type-img' />
              <div className='event-text'>
                <h1 className='event-header' alt = 'education-header'>Educational Discussions</h1>
                <p className='event-caption' alt = 'education-caption'>The MSA also hosts impactful educational events aimed at raising awareness about the various atrocities occurring across the Muslim world. 
                These events are designed to illuminate these critical issues and foster a deeper understanding among attendees. Through powerful lectures and presentations, we cover a wide range of topics, from the plight of Rohingya refugees to the ongoing genocide in Palestine. 
                Our goal is to educate and inspire action, encouraging participants to become more informed and engaged in advocating for justice and humanitarian efforts globally. 
                </p>
              </div>
            </div>
            <div className='career'>
              <div className='event-text'>
                <h1 className='event-header' alt = 'career-header'>Professional Guidance Seminars</h1>
                <p className='event-caption' alt = 'career-caption'>The MSA proudly hosts a Muslim Professional Conference, featuring distinguished Muslim speakers who provide invaluable insights on navigating the workforce while upholding Islamic principles. 
                This event is an excellent opportunity for attendees to gain practical advice on professional development, ethical challenges, and maintaining faith in a diverse work environment. Additionally, the conference serves as a premier networking platform, connecting students with potential employers and opening doors to exciting career opportunities.
                </p>
              </div>
              <img src="./images/mpc.JPG" alt='mpc-img' className='type-img' />
            </div>
        </div>
    </div>
  );
};

export default EventCalendar;
