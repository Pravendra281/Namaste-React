import { LOGO_URL } from "../Utils/Constants";
import logo from "../assests/img/food-logo.jpeg"
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header=()=>{

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
        <div className="logo">
            <img className="food-logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                <li>
                    Online Status:{onlineStatus? "✅":"🔴"}
                </li>
                  <li><Link to="/">Home</Link></li>
                  <li> <Link to="/about">About Us</Link> </li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li>  <Link to="/cart">Cart</Link></li>
                  <li>  <Link to="/grocery">Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;