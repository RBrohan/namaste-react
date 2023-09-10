import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restaurantData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px] h-[350px] rounded-lg"
      style={{ backgroundColor: "lightgrey" }}
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
