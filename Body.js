// import { useState, useEffect } from "react";
// import RestaurantCard from './RestaurantCard';

// import Shimmer from "./Shimmer";


// const Body = () => {
//     //Local state variable
//     const [ListOfRestaurants, setListOfRestaurants] = useState([]);
//     const [filteredRestaurant, setfilteredRestaurant] = useState([]);
//     const [searchtext, setsearchtext] = useState(" ");

//     //useeffect hook
//     useEffect(() => {
//         fetchData();
//     }, []);

//     //js async await
//     const fetchData = async () => {
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//         );

//         const json = await data.json();

//         console.log(json);
//         //optional Chaining
//         setListOfRestaurants(
//             json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

//         );
//         setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

//     };

//     //Conditional Rendering (Rendering based on conditions is known as Conditional rendering)
//     // if (ListOfRestaurants.length === 0) {
//     //     return <Shimmer />;
//     // }
//     //instead of using if i can directly return this by using ternery operator (Company Standard)
//     return (ListOfRestaurants.length === 0) ? (
//         <Shimmer />
//     ) : (
//         <div className="body">
//             <div className="filter">
//                 <div className="search">
//                     <input type="text" className="searchbox"
//                         value={searchtext}
//                         onChange={(e) => {
//                             setsearchtext(e.target.value);//readme notes (why we use this onChange line)
//                         }}
//                     />
//                     <button
//                         onClick={() => {
//                             const filteredRestaurant = ListOfRestaurants.filter((res) =>
//                                 res.info.name.toLowerCase().includes(searchtext.toLowerCase())
//                             );
//                             setfilteredRestaurant(filteredRestaurant);
//                         }}
//                     >Search</button>
//                 </div>

//                 <button className="filter-btn"
//                     onClick={() => {
//                         const filteredList = ListOfRestaurants.filter(
//                             (res) => res.info.avgRating > 4.3
//                         );
//                         setListOfRestaurants(filteredList);
//                     }

//                     }
//                 >Top Rated Restaurants</button>
//             </div>

//             <div className="res-container">
//                 {filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />
//                 )

//                 )}
//             </div>
//         </div>
//     );
// };

// export default Body;







import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import { COVER_IMG } from "../utils/constants";
import { withVegLabel } from "./RestaurantCard";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        if (json?.data?.cards?.length > 1) {
            const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        }
    };

    console.log(listOfRestaurants);
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>"Looks like you are offline."</h1>


    const handleSearch = () => {
        const filtered = listOfRestaurants.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filtered);
    };

    const handleTopRated = () => {
        const topRated = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
        setFilteredRestaurant(topRated);
    };

    return (
        <div className="body">



            <div className="flex justify-center">

                <section className="grid w-auto m-10 shadow-2xl sm:grid-cols-2 sm:w-auto sm:m-20">
                    <div
                        className="h-64 w-full bg-amber-600 rounded-t-2xl text-white sm:h-screen sm:rounded-t-none">

                        <p className="italic pl-5 mt-5 text-xl sm:text-3xl sm:mt-40 sm:pl-10">Why starve when you have us !</p>
                        <p className="pl-5 text-3xl sm:text-7xl sm:mt-10 sm:pl-10">Your favorite restaurants, delivered at your doorstep.</p>

                        <button className="h-10 mt-10 ml-5 bg-black font-medium text-xl py-2 rounded-full px-4 hover:bg-white hover:text-black sm:h-16 sm:mt-20 sm:ml-10" onClick={handleTopRated}>
                            Top Rated Restaurants

                        </button>

                    </div>
                    <div>

                        <img className="w-full rounded-b-2xl sm:h-screen sm:rounded-b-none" src={COVER_IMG}></img>
                    </div>
                </section>


            </div>




            <div className="flex justify-center text-center m-40">

                <div>
                    <input

                        type="text"
                        placeholder="Type here..."
                        className="border solid border-gray-700 rounded-full w-60 h-10 p-2 sm:w-80"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <div> <button className=" bg-amber-600 rounded-full w-40 h-10 text-white ml-1 hover:bg-amber-700"
                    onClick={handleSearch}>Search</button>
                </div>

            </div>


            <h3 className="text-3xl font-bold p-10 ml-20">Top restaurant chains in your area.</h3>

            <div className="res-container flex flex-wrap justify-evenly mx-20 ">
                {filteredRestaurant.length === 0 ? <Shimmer /> :
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

                            {restaurant.info.veg ? (
                                <RestaurantCardVeg resData={restaurant} />
                            ) : (
                                <RestaurantCard resData={restaurant} />)
                            }


                        </Link>
                    ))}
            </div>
        </div >
    );
};

export default Body;
//In first code only search button is working and top rated is not working therefore , in second code we seprate the logigs into two functions and we are calling them accordingly . now both buttons are working fine.
