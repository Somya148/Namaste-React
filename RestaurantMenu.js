import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    const [showIndex, setshowIndex] = useState(null);



    useEffect(() => {
        //readme line 38
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId + "&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, locality, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card["@type"]
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    return (
        <div className="w-1/2 flex flex-col ml-96">
            <div className="mt-40 mb-32 p-5 shadow-2xl">
                <h1 className="text-2xl font-bold text-orange-600">{name}</h1>



                <h3 className="text-xl font-bold">{cuisines.join(",")}</h3>
                <h3 className="font-bold">{costForTwoMessage}</h3>
                <h3>{avgRating} ⭐</h3>

                <h3>{locality}</h3>


            </div>

            {/* categories accordions */}
            {categories.map((category, index) => (
                // controlled component
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)}

                />
            ))}
        </div>
    );
};

export default RestaurantMenu;