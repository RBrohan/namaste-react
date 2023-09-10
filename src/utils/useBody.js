import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";

const useBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    searchRestaurant,
    setSearchRestaurant,
  };
};

export default useBody;
