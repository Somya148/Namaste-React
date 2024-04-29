import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {

    // const [showItems, setshowItems] = useState(false);
    const handleClick = () => {
        //not of show items -> if showitems is true make it false if it is false make it true(for toggle)
        setshowIndex();
    }
    return (
        //Header
        <div>
            <div className="bg-slate-100 m-5 shadow-lg">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleClick}>
                    <span className="text-2xl font-bold p-5">{data.title} ({data.itemCards.length})</span>
                    <span className="p-5 text-2xl">👇</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>



        </div>
    );

};

export default RestaurantCategory;