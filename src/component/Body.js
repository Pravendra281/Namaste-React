import ResturantCard from "./ResturantCard";
import { useState,useEffect } from "react";
import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


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

    const onlineStatus=useOnlineStatus();

    if (onlineStatus===false) return (<h1>Looks like you're Offline!! check your internet connection</h1>)

    if (!listofresturants) return null;

//   if (filteredRestaurants?.length === 0)
//     return <h1>No Restraunt match your Filter!!</h1>;


    return (listofresturants?.length === 0)? (<Shimmer/>) :(
        <>
        <div className="flex">
        <div className="m-4 p-2 ">
            <input type="text" className="border border-solid border-black" placeholder=" Search...." value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="bg-green-200 px-4 py-2 m-2 rounded-lg" onClick={()=>
            {
               const data= filterData(searchText,listofresturants);
               setFilteredRestaurants(data);
            }}>Search</button>
        </div>
    <div className="body">
        <div className="m-2 p-2 flex items-center">
            <button className="bg-gray-200 px-4 py-2 m-4 rounded-lg"
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
        <div className="flex flex-wrap">
    {filteredRestaurants.map((restaurant)=>(
       <Link to={"/restaurant/" + restaurant.data.id }  key={restaurant.data.id}><ResturantCard resData={restaurant}/></Link> 
    ))}

        
    </div>
    
    </>)
}

export default Body;