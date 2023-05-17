import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText,listofresturants){
 const filterData=listofresturants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
 return filterData;
}

const Body=()=>{

    const[searchText,setSearchText]=useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[listofresturants,setListOfResturants]=useState([]);

    useEffect(()=>{
    getRestaurants();
    },[])

    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)
        setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!listofresturants) return null;

//   if (filteredRestaurants?.length === 0)
//     return <h1>No Restraunt match your Filter!!</h1>;


    return (listofresturants?.length === 0)? (<Shimmer/>) :(
        <>
        <div className="search-box">
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={()=>
            {
               const data= filterData(searchText,listofresturants);
               setFilteredRestaurants(data);
            }}>Search</button>
        </div>
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filteredList =listofresturants.filter(
                    (res)=>res.data.avgRating>4);
                    setFilteredRestaurants(filteredList);
            }}>
                Top Rated Resturant
            </button>
        </div>
        </div>
        </div>
        <div className="res-container">
    {filteredRestaurants.map((restaurant)=>(
       <Link to={"/restaurant/" + restaurant.data.id }  key={restaurant.data.id}><ResturantCard resData={restaurant}/></Link> 
    ))}

        
    </div>
    
    </>)
}

export default Body;