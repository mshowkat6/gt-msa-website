import React, { useState, useEffect } from "react";
import '../App.css';
import './PrayerImage.css';
import PrayerTimes from "./PrayerTimes";

function PrayerImage() {

    return (
        <div className="prayer-all-container">
            <div className = 'prayer-image-container'>
                <img src="./images/prayer-img-2.jpg" alt='prayer-img' className='prayer-img' />
                <h1 className = "prayer-image-header">
                    PRAYER INFORMATION
                </h1>
            </div>
            <div className="prayer-times-container">
                <PrayerTimes />
            </div>
            <div className = "prayer-location">
                <h1 className="location-header">Where is the Prayer Room ?</h1>
                <div className="pic-and-vid">
                    <div className="reflection-image">
                        <img src="./images/reflection.jpg" alt='reflection-map' className='reflection-map' />
                        <p className="reflection-caption">Map of Student Center</p>
                    </div>
                    <div className="reflection-vid">
                        <img src="./images/reflection.jpg" alt='reflection-map' className='reflection-map' />
                        <p className="reflection-caption">This Video Can Help Guide You To The Prayer Room</p>
                    </div>
                </div>
            </div>
            <div className="jummah-gc">
                <div className="jummah-text">
                    <h1 className="jummah-header">Join Our Jama'ah Group Chat</h1>
                    <p className="jummah-caption">Join our community to get live notifications for congregational prayer times, ensuring you never miss the chance to earn extra rewards. Receive live updates on prayer times 
                        and stay informed with our Friday Jummah and general Salah announcements. 
                        To join, simply contact our Jummah Coordinator and request an invitation.</p>
                </div>
                <img src="./images/prayer-img-2.jpg" alt='prayer-img-jummah' className='prayer-img-jummah' />
            </div>
        </div>
    )
}

export default PrayerImage;