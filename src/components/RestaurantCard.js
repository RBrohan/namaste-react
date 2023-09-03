import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restaurantData?.info;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "lightgrey" }}>
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
