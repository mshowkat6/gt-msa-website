import React from "react";
import { Link } from "react-router-dom";
import './ResourceImage.css'

function ResourceImage () {
    return (
        <div className="resource-container">
            <div className="islam-resource">
                <Link to='/abt-islam' className='islam-resource-link'>
                    <img src="./images/islam-image.JPG" alt='islam-resource-img' className='resource-img' />
                    <h1 className="resource-titles"> About Islam </h1>
                </Link>
            </div>
            <div className="volunteer-resource">
                <Link to='/volunteering' className='islam-resource-link'>
                    <img src="./images/volunteer-resource.JPG" alt='volunteer-resource-img' className='resource-img' />
                    <h1 className="resource-titles"> Volunteering </h1>
                </Link>
            </div>
            <div className="food-resource">
                <Link to='/halal-food' className='islam-resource-link'>
                    <img src="./images/food-resource.JPG" alt='food-resource-img' className='resource-img' />
                    <h1 className="resource-titles"> Halal Food </h1>
                </Link>
            </div>
        </div>
    )
}

export default ResourceImage