import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../Utils/MockData";


function filterData(searchText,listofresturants){
 const filterData=listofresturants.filter((restaurant)=>restaurant.data.name.includes(searchText));
 return filterData;
}

const Body=()=>{

   
    const[searchText,setSearchText]=useState("")
    const[listofresturants,setListOfResturants]=useState(resList);

    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={()=>
            {
               const data= filterData(searchText,listofresturants);
               setListOfResturants(data);
            }}>Search</button>
        </div>
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filteredList =listofresturants.filter(
                    (res)=>res.data.avgRating>4);
                setListOfResturants(filteredList);
            }}>
                Top Rated Resturant
            </button>
        </div>
        <div className="res-container">
    {listofresturants.map((restaurant)=>(
        <ResturantCard key={restaurant.data.id} resData={restaurant}/>
    ))}

        </div>
    </div>
    </>)
}

export default Body;