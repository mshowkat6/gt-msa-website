import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './PrayerTimes.css';

const PrayerTimes = ({ city, country, method }) => {
  const [timingsData, setTimingsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  

  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const date = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'); // Current date in DD-MM-YYYY format
        const response = await fetch(
          `http://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&method=${method}`
        );
        const data = await response.json();
        setTimingsData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimings();
  }, [city, country, method]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${suffix}`;
  };

  const orderedKeys = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

  return (
    <div className = "container">
      <div className="prayer-container">
        <h1 className="title">
          Prayer Times
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orderedKeys.map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{convertTo12HourFormat(timingsData.timings[key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className = "jummah-container">
          <h1 className = "jummah-title">
            Jummah Times
          </h1>
          <table className = "jummah-table">
              <thead>
                <tr>
                  <th>Jummah</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  <td> First Jummah</td>
                  <td> 2:00 pm </td>
                </tr>
                <tr>
                  <td> Second Jummah</td>
                  <td> 3:00 pm </td>
                </tr>
              </tbody>
          </table>
          <h1 className="room-title"> Prayer Rooms </h1>
          <div className = 'location-container'>
            <div className = "wudhu-container">
                <p className= "loc"> uhh building somthing </p>
                <p className= "num"> 103 </p>
                <p className= "loc"> wudhu station </p>
            </div>
            <div className = "room-container">
                <p className= "loc"> uhh building somthing </p>
                <p className="num"> 103 </p>
                <p className="loc"> wudhu station </p>
            </div>
          </div>
        {/* Conditionally render the Link based on the current path */}
        {location.pathname !== '/prayer-information' && (
          <Link to='/prayer-information' className='more-prayer-info'>
            View More Prayer Information
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrayerTimes;
