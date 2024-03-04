import React from 'react';
import "../styles/restroCard.css"
const RestaurantCard = () => {
    return (
        <div className='cardWrapper'>
            <div className='restroCard'>
                <div className='restroCardImage'>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/03501c33ecb3a3105124441e541e6fe4" alt="restroImage" className='cardImage'/>
                </div>
                <div className='restroDetails'>
                    <h3 className='restroName'>Burger king</h3>
                    <h5 className='restroCuisines'>Burger,Beverages,Cafe</h5>
                    <p className='restroFeatures'>
                    <span className='ratingIcon'
                     
><i className="fa-solid fa-star"></i></span>
                        <span className='restroRatings'>4.5</span>
                        <span>|</span>
                        <span className='restroDistance'>2.3 km</span>
                        <span>|</span>
                        <span className='restroCostForTwo'>₹400 for two</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
