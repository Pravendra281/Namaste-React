import { useEffect,useState } from "react";
import { Menu_Api } from "./Constants";

const useRestaurantMenu =(id)=>{
    const[restaurant,setRestaurant]=useState(null)

    useEffect(()=>{
   fetchdata();
    },[])

const fetchdata=async()=>{
    const data=await fetch(Menu_Api+id);
    const json=await data.json();
    setRestaurant(json.data);
};
return restaurant;
}

export default useRestaurantMenu;