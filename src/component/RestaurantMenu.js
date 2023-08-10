import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const {id}=useParams();

    const restaurant=useRestaurantMenu(id)

    const [showIndex,setShowIndex]=useState(null)

    
if(!restaurant){
    return <Shimmer/>;
}

const {itemCards}=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// console.log(restaurant?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

// console.log(categories)

    return (
               <div className="text-center">
             <h1 className="my-4 text-xl font-bold shadow-sm">{restaurant?.cards[0]?.card?.card?.info.name}</h1>
        <h2 className="m-2  font-bold">{restaurant?.cards[0]?.card?.card?.info.areaName}</h2>
              <h2 className="m-2 font-bold">{restaurant?.cards[0]?.card?.card?.info.city}</h2>
        <img src={CDN_URL + restaurant?.cards[0]?.card?.card.image}/>
        
            {categories.map((category, index)=>(<RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card }
                showItems={index == showIndex ? true : false}
                setShowIndex={()=> setShowIndex(index)}
            />))}
        
        </div>    
)
}
export default RestaurantMenu;