import RestaurantCard, { restaurantWithIsOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    filteredRestaurant,
    setFilteredRestaurant,
    listOfRestaurants,
    setListOfRestaurants,
    searchRestaurant,
    setSearchRestaurant,
    loggedInUser,
    setUserName,
  } = useBody();

  const RestaurantCardOpen = restaurantWithIsOpen(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are currently offline</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="py-4 ml-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchRestaurant}
            onChange={(event) => {
              setSearchRestaurant(event.target.value);
            }}
          />
          <button
            className="ml-4 px-6 py-1 bg-cyan-200 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="py-4 ml-4 flex items-center">
          <button
            className="ml-4 px-6 py-1 bg-cyan-200 rounded-md"
            onClick={() => {
              const topRatedRestaurant = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setListOfRestaurants(topRatedRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="py-4 ml-4 flex items-center p-2">
          <label>Username :</label>
          <input
            type="text"
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap ml-[calc(10%+36px)] mr-[calc(10%+36px)]">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardOpen restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
