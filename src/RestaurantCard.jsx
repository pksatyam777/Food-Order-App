import React from "react";
import { IMG_CDN_URL } from "./constant";

function RestaurantCard(item) {
  const restaurant = item.data;
  return (
    <>
      {console.log(item)}
      <div className="card w-52 rounded border border-black-600 p-2 m-2 h-80  hover:shadow-2xl shadow-lg mt-4">
        <img
          className="rounded"
          alt="restaurant-card"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        ></img>
        <h3 className="font-sans font-medium my-4">{restaurant.name}</h3>
        <h4 className="text-sm">{restaurant.cuisines.join(", ")}</h4>
        <h5>{restaurant.avgRating + " " + "🌟"}</h5>
        {/* <button className=' search-btn w-24 p-1 mx-2 bg-green-500 text-white rounded-md border-2' >Cart +</button> */}
      </div>
    </>
  );
}

export default RestaurantCard;
