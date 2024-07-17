import React from 'react';
import './HalalFoodImage.css';

function HalalFoodImage () {
    return (
    <>
    <div>
        <div className='food-photo'> 
            <img src="./images/food-img.jpg"  alt = 'food-img' />
            <h1 className = "halal-header">
                HALAL FOOD
            </h1>
        </div>
        <div className='restaurants'>
            <h1 className='restaurant-header'>Halal Restaurants Near Campus</h1>
            <div className='restaurants-grid'>
            <div className='gyro-chef'>
                <img src="./images/gyro.JPG" alt='gyro-img' className='restaurant-img' />
                <h1 className='food-name'>Gyro Chef | On Campus</h1>
                <p className='food-caption'>Second Floor of John Lewis Student Center</p>
            </div>
            <div className='halal-guys'>
                <img src="./images/halal-guys.JPG" alt='halal-guys-img' className='restaurant-img' />
                <h1 className='food-name'>The Halal Guys | 1.5 Miles Away</h1>
                <p className='food-caption'>95 8th St NW #200, Atlanta, GA</p>
            </div>
            <div className='tannour'>
                <img src="./images/tannour.jpg" alt='tannour-img' className='restaurant-img' />
                <h1 className='food-name'>Tannour | 1.4 Miles Away</h1>
                <p className='food-caption'>398 14th St NW Unit C, Atlanta, GA</p>
            </div>
            <div className='peri'>
                <img src="./images/peri.JPG" alt='peri-img' className='restaurant-img' />
                <h1 className='food-name'>The Peri Peri Grill | 1 Mile Away</h1>
                <p className='food-caption'>280 Luckie St NW Suite C, Atlanta, GA</p>
            </div>
            <div className='mamoun'>
                <img src="./images/mamoun.JPG" alt='mamoun-img' className='restaurant-img' />
                <h1 className='food-name'>Mamoun's Falafel | 1.6 Miles Away</h1>
                <p className='food-caption'>1269 Northside Dr NW Suite #720, Atlanta, GA</p>
            </div>
            <div className='tabla'>
                <img src="./images/tabla.JPG" alt='tabla-img' className='restaurant-img' />
                <h1 className='food-name'>Tabla | 1.9 Miles Away</h1>
                <p className='food-caption'>77 12th St NE #2, Atlanta, GA</p>
            </div>
            <div className='greedy-bunch'>
                <img src="./images/greedy.JPG" alt='greedy-img' className='restaurant-img' />
                <h1 className='food-name'>The Greedy Bunch | 1.4 Miles Away</h1>
                <p className='food-caption'>420 14th St NW, Atlanta, GA</p>
            </div>
            <div className='aviva'>
                <img src="./images/aviva.JPG" alt='aviva-img' className='restaurant-img' />
                <h1 className='food-name'>Aviva | 1.4 Miles Away</h1>
                <p className='food-caption'>756 W Peachtree St NW suite G, Atlanta, GA</p>
            </div>
            <div className='mukja'>
                <img src="./images/mukja.JPG" alt='mukja-img' className='restaurant-img' />
                <h1 className='food-name'>Mukja | 1.9 Miles Away</h1>
                <p className='food-caption'>933 Peachtree St NE Suite 951, Atlanta, G</p>
            </div>
            </div>
        </div>
        <div className='map'>
            <h2 className='map-header'>Halal Food Map</h2>
            <iframe 
                src="https://www.google.com/maps/d/embed?mid=1ujZqTRsOJz-ra3gNB-_51iUyZoTFejw&hl=en&ehbc=2E312F" 
                width="1000" 
                height="650"
                style={{ border: '30px solid rgb(34, 31, 65)' }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    </div>
    </>
    )
}

export default HalalFoodImage;