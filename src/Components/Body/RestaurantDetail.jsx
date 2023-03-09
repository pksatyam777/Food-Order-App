import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../../Utils/constant';
import Shimmer from '../../Shimmer';
import { addItem , removeItem , clearCart } from '../../Utils/CartSlice';
import { useDispatch } from 'react-redux';
function RestaurantDetail() {
    const params=useParams();
    const {id}=params
    
    const [resDetail,setResDetail]=useState({menu:{
        items:{
            1:"first"
        }
    }})
    const dispatch= useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    const handleRemoveItem=(item)=>{
        dispatch(removeItem(item))
    }
    const handleCount=(countItem)=>{
        
    }
    useEffect(()=>{
        getRestaurantInfo()
    },[])

     async function getRestaurantInfo(){
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=18.535666&lng=73.793546&menuId='+id)
        const json= await data.json();
        setResDetail(json.data);
        console.log(json.data);
        // console.log(Object.values(resDetail.menu.items))
    }
return !resDetail ? 
    (
        <Shimmer/> 
    ):
        
    
  (<div className='flex'>
    <div className=''><h1>RestaurantDetil {id}</h1>
    <h2>{resDetail.name}</h2>
    <img className='rounded w-96' alt="restaurant-detail" src={ IMG_CDN_URL+resDetail.cloudinaryImageId}></img>
    <h3>{resDetail.area}</h3>
    <h3>{resDetail.city}</h3>
    <h3>{resDetail.avgRating} Stars</h3>
    <h3>{resDetail.costForTwoMsg}</h3>
    </div>
    <div>
        <h1>Menu</h1>
    {console.log(resDetail.menu.items)}
    <ul>
        
        {Object.values(resDetail.menu.items).map((item)=>(
            <li key={item.id}>
                {item.name}
                <button onClick={()=>handleAddItem(item)} className='p-2 m-2 bg-green-400 rounded-md'>+</button>
                <button onClick={handleRemoveItem(item)} className='p-2 m-2 bg-green-400 rounded-md'>-</button>
            </li>
        ))}
        
    </ul>
    
    </div>
    </div>
  )
}

export default RestaurantDetail