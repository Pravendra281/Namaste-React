import { CDN_URL } from "../Utils/Constants";
const ResturantCard=(props)=>{
    const{resData}=props;

    // const {
    //   cloudinaryImageId,
    //   name,
    //     avgRating,
    //     cuisines,
    //     costForTwo,
    //     deliveryTime,
    //   } = resData;

    return(
       <div className="m-4 p-4 w-[280px] h-auto rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.areaName} </h4>
      
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