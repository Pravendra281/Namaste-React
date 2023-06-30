import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu=()=>{
    const {id}=useParams();

    const restaurant=useRestaurantMenu(id)
    
if(!restaurant){
    return <Shimmer/>;
}

const {itemCards}=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <>
        <div className="flex justify-items-center">
        <div className="menu">
        <h2 className="m-2 p-2 font-serif text-xl  ">Restaurant id:{restaurant?.cards[0]?.card?.card?.info.id}</h2>
        <div className="border border-solid bg-gray-50 hover:bg-slate-100">
       <img className="m-2 p-2 w-[400px] bg-slate-100" src={CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
} alt="menu logo" /> 
        <h1 className="m-2 p-2 text-xl font-bold">{restaurant?.cards[0]?.card?.card?.info.name}</h1>
        <h2 className="m-2 p-2 font-bold">{restaurant?.cards[0]?.card?.card?.info.areaName}</h2>
        <h2 className="m-2 p-2 font-bold">{restaurant?.cards[0]?.card?.card?.info.city}</h2>
        <h2 className="m-2 p-2 font-bold">{restaurant?.cards[0]?.card?.card?.info.avgRating
}stars</h2>
      <h2 className="m-2 p-2 font-bold ">{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
      </div>
</div>   

<div className="flex border border-solid bg-slate-50 m-20">
        <h1 className="m-4 py-4  flex text-2xl font-bold">Menu</h1>
          <ul className="text-xl font-bold m-4 p-4">{itemCards.map((item)=>(
            <li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100 ||item.card.info.defaultprice/100}-------<img className="w-40" src={CDN_URL + item.card.info.imageId} alt="pic" /> </li>)
          )}</ul>
            </div>
            </div>
            </>
            )
          }

export default RestaurantMenu;