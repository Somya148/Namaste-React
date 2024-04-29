import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div className="p-5 border-gray-300 border-b-2 mb-5 flex justify-between" key={item.card.info.id}>
                    <div className="w-96">

                        <div className="font-semibold text-xl ">
                            <span className="">{item.card.info.name}</span>
                            <span className=""> ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                        </div>

                        <div className="text-lg"><p>{item.card.info.description}</p></div>

                    </div>

                    <div className="w-64">
                        <div><button className="absolute bg-white text-green-600 font-bold rounded-lg p-2" onClick={() => handleAddItem(item)}>Add +</button></div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-44 rounded-lg"></img>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemList;