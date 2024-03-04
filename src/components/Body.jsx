import React, { useEffect, useState } from 'react'
import "../styles/body.css"
import RestaurantCard from './RestaurantCard'
const Body = () => {

  const [restaurants,setRestaurants]=useState([]);

  useEffect(()=>{
    getData();
  },[]);
  async function getData(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // console.log(json.data.cards);
    const respons=json.data.cards[2];
    console.log(respons); 
  }
  // getData();

  return (
    <div className='body'>
      <div className='mainContainer'>
        <div className='search'>
          <input type='text' placeholder='Search a restaurant you want...' className='searchInput'/>
          <button className='searchButton'>Search</button>
        </div>
        <div className='cardContainer'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
      </div>
    </div>
  )
}

export default Body;
