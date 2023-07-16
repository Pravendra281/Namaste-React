import { CDN_URL } from "../Utils/Constants";
const ResturantCard=(props)=>{
    const{resData}=props;
    return(
    <div className="m-4 p-4 w-[240px] bg-gray-200 rounded-lg">
        <img className="rounded-lg" src={CDN_URL + resData.data.cloudinaryImageId}/>
        <h3 className="py-2 font-bold text-lg">{resData.data.name}</h3>
        <h3>{resData.data.cuisines.join(", ")}</h3>
        <h3>{resData.data.avgRating} stars</h3>
        <h4> ₹{resData.data.costForTwo/100} For Two</h4>
        <h4>{resData.data.deliveryTime}minutes</h4>
    </div>)
}

 export const withPromotedLabel=(ResturantCard)=>{
    return(props)=>{
        return (
            <div>
                <label className="bg-black absolute text-white m-2 p-2 rounded-xl h-7 justify-center ">Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}


export default ResturantCard;