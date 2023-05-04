import { CDN_URL } from "../Utils/Constants";
const ResturantCard=(props)=>{
    const{resData}=props;
    return(
    <div className="res-card">
        <img className="res-img" src={CDN_URL + resData.data.cloudinaryImageId}/>
        <h3>{resData.data.name}</h3>
        <h3>{resData.data.cuisines.join(", ")}</h3>
        <h3>{resData.data.avgRating} stars</h3>
        <h4> ₹{resData.data.costForTwo/100} For Two</h4>
        <h4>{resData.data.deliveryTime}minutes</h4>
    </div>)
}

export default ResturantCard;