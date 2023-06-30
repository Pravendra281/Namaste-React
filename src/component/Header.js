import { LOGO_URL } from "../Utils/Constants";
import logo from "../assests/img/food-logo.jpeg"
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header=()=>{

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg border-solid">
        <div className="logo">
            <img className="w-32" src={logo}/>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4 space-x-2 font-bold justify-center">
                <li className="p-4 justify-center text-xl">
                    Online Status:{onlineStatus? "✅":"🔴"}
                </li>
                  <li className="p-4 justify-center text-xl"><Link to="/">Home</Link></li>
                  <li className="p-4 justify-center text-xl"> <Link to="/about">About Us</Link> </li>
                  <li className="p-4 justify-center text-xl"><Link to="/contact">Contact</Link></li>
                  <li className="p-4 justify-center text-xl">  <Link to="/cart">Cart</Link></li>
                  <li className="p-4 justify-center text-xl">  <Link to="/grocery">Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;