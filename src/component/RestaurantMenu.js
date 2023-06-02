import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const {id}=useParams();

    const[restaurant,setRestaurant]=useState(null)
    
useEffect(()=>{
    getRestaurantsInfo();
},[])



async function getRestaurantsInfo(){
    const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ id);
    const json=await data.json()
    // console.log(json.data)
    // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item => item?.card?.info)) 
    setRestaurant(json.data)
    // console.log(json)
    // console.log("string",restaurant)
}

if(!restaurant){
    return <Shimmer/>;
}

const {itemCards}=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <>
        <div className="menu">
        <div className="menu-name">
        <h2>Restaurant id:{restaurant?.cards[0]?.card?.card?.info.id}</h2>
       <img className="menu-pic" src={CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
} alt="menu logo" /> 
        <h1>{restaurant?.cards[0]?.card?.card?.info.name}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info.areaName}</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info.city}</h2>
        <h2>{restaurant?.cards[0]?.card?.card?.info.avgRating
}stars</h2>
      <h2>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
</div>   

<div className="menu-details">
        <h1>Menu</h1>
          <ul>{itemCards.map((item)=>(
            <li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100 ||item.card.info.defaultprice/100}-------<img className="items-pic" src={CDN_URL + item.card.info.imageId} alt="pic" /> </li>)
          )}</ul>
            </div>
            </div>
            </>
            )
          }

export default RestaurantMenu;