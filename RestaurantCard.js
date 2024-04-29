import { useContext } from "react";
import { CDN_URL } from "../utils/constants";//Slightly diff. way of importing here (Name Export) 
import UserContext from "../utils/UserContext";

const RestaurauntCard = (props) => {
    const { loggedInUser } = useContext(UserContext);
    const { resData } = props;
    return (
        <div className="rounded-lg res-card w-64 mb-10 hover:shadow-2xl overflow-hidden text-ellipsis whitespace-normal" >
            <div className="res-card-logo  ">
                <img className="rounded-t-lg h-44 w-full" src={CDN_URL + resData.info.cloudinaryImageId}></img>
            </div>

            <div className="res-card-content pt-10 pl-3 pb-2">
                <h3 className="text-lg font-medium">{resData.info.name}</h3>
                <h3>{resData.info.avgRating + " " + "⭐"}</h3>
                <h4>{resData.info.cuisines.join(",")}</h4>
                <p>{resData.info.sla.deliveryTime + " " + "mins"}</p>
                {/* <h4>{loggedInUser}</h4> */}
            </div>
        </div>


    );
};

export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-700 text-white w-10 p-1 rounded-full text-center">Veg</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurauntCard;