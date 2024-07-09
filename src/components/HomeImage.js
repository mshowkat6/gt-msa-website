import React from "react";
import '../App.css';
import './HomeImage.css';

function HomeImage() {
    return (
        <div className = 'image-container'>
            <img src="./homeIMG.jpg"  alt = 'home-img' />
            <h1 className = "header">
                SALAM!
            </h1>
            <p className = "caption1">
                And keep yourself patient with those who call upon their Lord in the morning and the evening, seeking His countenance [Quran 18:28]
            </p>
        </div>
    )
}

export default HomeImage;