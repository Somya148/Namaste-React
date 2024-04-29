import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btn_name, setbtn_name] = useState("Login");

    const onlinestatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    //subscribing to our store using a selector (selector ia a hook in react)
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);


    return (
        <div className="flex items-center justify-between shadow-lg  h-24">

            <div className="logo-container">

                <img className="pl-6 w-2/5" src={LOGO_URL}></img>

            </div>


            <div className="nav-items text-xs sm:text-xl">
                <ul className="flex pr-6">
                    {/* <li className="px-3">Online Status:{onlinestatus ? "✅" : "🔴"}</li> */}
                    <li className="px-3 hover:text-orange-600">
                        <Link to="./">Home</Link>
                    </li>
                    <li className="px-3 hover:text-orange-600">
                        <Link to="./about">About Us</Link>
                    </li>
                    {/* <li className="px-3 hover:text-orange-600"><Link to="./grocery">Grocery</Link></li>
                    <li className="px-3 hover:text-orange-600"> <Link to="./contact">Contact Us</Link></li> */}


                    <li className="px-3 hover:text-orange-600" > <button className="login" onClick={() => {
                        btn_name === "Login" ? setbtn_name("Logout") : setbtn_name("Login")
                        console.log(btn_name)
                    }

                    }>{btn_name}</button></li>

                    <li className="px-3 hover:text-orange-600">  <Link to="./cart">Cart ({cartItems.length})</Link></li>


                    <li className="px-3 hover:text-orange-600">{loggedInUser}</li>


                </ul>
            </div>

        </div>
    );

};
export default Header;