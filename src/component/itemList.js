import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/Constants";
import { addItem } from "../Utils/cartSlice";

const ItemList=({items})=>{
// console.log(items)

    const dispatch=useDispatch();
    const handleAdditems = (item)=>{
   dispatch(addItem(item))
    }
    
return <div>
{
    items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
        <div className="w-9/12">
        <div className="py-2 ">
     <span className="font-semibold">{item.card.info.name}</span>
     <span className="font-semibold"> - ₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
     </div>
     <p className="text-xs">{item.card.info.description}</p>
        </div>
        <div className="w-3/12 p-4">
        <div className="absolute">
            <button className="bg-black text-white mx-16 p-2 shadow-lg rounded-lg" onClick={()=>handleAdditems(item)}> Add + </button>
        </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
        </div>
        </div>
        
    ))
}
</div>
}

export default ItemList;