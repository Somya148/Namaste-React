import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold m-10">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    onClick={handleClearCart}
                    className="bg-black text-white rounded-lg text-center p-3 ml-96">
                    Clear Cart
                </button>
                {cartItems.length === 0 && (<h1 className="text-center mt-20 text-2xl">Your Cart is Empty!</h1>)}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};
export default Cart;