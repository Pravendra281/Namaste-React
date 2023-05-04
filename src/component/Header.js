import { LOGO_URL } from "../Utils/Constants";
const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img className="food-logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;