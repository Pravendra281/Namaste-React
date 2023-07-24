import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../Utils/cartSlice";



const Cart=()=>{
 
    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();

   const handleClearCart=()=>{
    dispatch(clearCart());
   }

    return ( 
    <div className="text-center m-5 p-5">
   <h1 className="font-bold text-2xl"> Cart</h1>
 <div className="w-6/12 m-auto">
 <button className="m-2 p-2 bg-black text-white rounded-full" onClick={handleClearCart} >Clear Cart</button>
 {cartItems.length===0 && <h1>Please Add Items to the card it is emptied now ! Place your Order</h1>}
 <ItemList items={cartItems}/>
  </div>
    </div>
    )
}

export default Cart;