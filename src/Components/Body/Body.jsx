import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { cards } from "../../Utils/constant";
import Shimmer from "../../Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
function Body() {
  const [input, setInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredrestaurant, setFilterRestaurant] = useState([]);
  const handleSubmit = (input, restaurant) => {
    let FilterData = restaurant.filter((item) =>
      item.data.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(FilterData);
    setFilterRestaurant(FilterData);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.535666&lng=73.793546&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json.data.cards[2].data.data.cards);
    setFilterRestaurant(json.data.cards[2].data.data.cards);
  }
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(input, allRestaurant);
      console.log("Entering");
    }
  };
  // if(filteredrestaurant.length === 0) return <h1> No Restaurant Found!</h1>
  // if(allRestaurant.length ===0) return null;

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen">
      <div class=" bg-[url('./food-cover.jpg')] bg-no-repeat w-full bg-cover">
        <div class="container h-80 flex justify-center items-center">
          <div class="relative">
            <div class="absolute top-4 left-3">
              <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
              onKeyDown={(e) => onKeyPress(e)}
              type="text"
              class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div class="absolute top-2 right-2">
              <button class="h-10 w-20 text-white rounded-lg bg-emerald-500 hover:bg-emerald-600" onClick={() => handleSubmit(input, allRestaurant)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredrestaurant.map((card, index) => {
          return (
            <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
              <RestaurantCard key={index} data={card.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
