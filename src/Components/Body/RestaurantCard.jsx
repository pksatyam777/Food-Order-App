import React from "react";
import { IMG_CDN_URL } from "../../Utils/constant";

function RestaurantCard(item) {
  const restaurant = item.data;
  const star =<svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  return (
    <>
      {console.log(item)}
      <div className="card w-52 rounded border border-black-600 px-2 py-2 m-2 h-80  hover:shadow-2xl shadow-lg mt-4">
        <img
          className="rounded  hover:scale-125 ease-in duration-200"
          alt="restaurant-card"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        ></img>
        <h3 className="font-sans font-medium py-2 my-4">{restaurant.name}</h3>
        <h4 className="text-sm py-2 h-16">{restaurant.cuisines.join(", ")}</h4>
        <h5 className="py-2">{restaurant.avgRating + " " + "⭐"}</h5>
        {/* <button className=' search-btn w-24 p-1 mx-2 bg-green-500 text-white rounded-md border-2' >Cart +</button> */}
      </div>
    </>
  );
}

export default RestaurantCard;
