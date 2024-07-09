import React, { useState, useEffect } from "react";
import '../App.css';
import './PrayerImage.css';
import PrayerTimes from "./PrayerTimes";

function PrayerImage() {

    return (
        <div className="prayer-all-container">
            <div className = 'prayer-image-container'>
                <img src="./images/prayer-img.jpg" alt='prayer-img' className='prayer-img' />
                <h1 className = "prayer-image-header">
                    PRAYER INFORMATION
                </h1>
            </div>
            <div className="prayer-times-container">
                <PrayerTimes />
            </div>
        </div>
    )
}

export default PrayerImage;