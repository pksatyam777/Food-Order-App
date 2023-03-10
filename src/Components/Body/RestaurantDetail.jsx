import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../Utils/constant";
import Shimmer from "../../Shimmer";
import { addItem, removeItem, clearCart } from "../../Utils/CartSlice";
import { useDispatch } from "react-redux";
function RestaurantDetail() {
  const params = useParams();
  const { id } = params;

  const [resDetail, setResDetail] = useState({
    menu: {
      items: {
        1: "first",
      },
    },
  });
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleCount = (countItem) => {};
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.535666&lng=73.793546&menuId=" +
        id
    );
    const json = await data.json();
    setResDetail(json.data);
    console.log(json.data);
    // console.log(Object.values(resDetail.menu.items))
  }
  return !resDetail ? (
    <Shimmer />
  ) : (
    <div className="flex  w-screen flex-col p-2 m-2">
      <div className="flex flex-row border rounded-lg ">
        <img
          className="rounded-lg border w-96 p-2 m-2"
          alt="restaurant-detail"
          src={IMG_CDN_URL + resDetail.cloudinaryImageId}
        ></img>
        <div className="flex flex-row">
            <div className="flex flex-col">
        {/* <h1>Restaurant ID {id}</h1> */}
        <h1 className="text-2xl font-bold text-slate-800 p-2">{resDetail.name}</h1>
        <h3 className="p-2">{resDetail.area} , {resDetail.city}</h3>
        
        <h3 className="p-2 bg-green- rounded">{resDetail.avgRating} ⭐</h3>
        <h3 className="p-2">{resDetail.costForTwoMsg}</h3>
        </div>
        </div>
      </div>
      <div className="flex flex-col border rounded justify-center items-center">
        <h1 className="justify-items-center font-bold text-emerald-300 text-2xl">Our Menu</h1>
        {console.log(resDetail.menu.items)}
        <ul className="">
        
        {Object.values(resDetail.menu.items).map((item)=>(
            <li key={item.id} className="flex flex-row justify-between border rounded  p-2 m-2">
                <img className="rounded border lg:w-56" src={IMG_CDN_URL + item.cloudinaryImageId} alt="menu item" />
                <div className="flex flex-col">
                
                <span className="p-1 m-1 font-bold">{item.name}</span>
                <span className="p-1 m-1 font-normal">₹{((item.price)/100).toFixed(2) }</span>
                </div>
                <div className="flex flex-col">
                <button onClick={(e)=>handleAddItem(item)} className='p-1 m-2 w-20 bg-green-200 rounded-md'>Add</button>
                </div>
            </li>
        ))}
        
    </ul>
      </div>
    </div>
  );
}

export default RestaurantDetail;
