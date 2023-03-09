import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './constant';
import Shimmer from './Shimmer';

function RestaurantDetail() {
    const params=useParams();
    const {id}=params
    const [resDetail,setResDetail]=useState({menu:{
        items:{
            1:"first"
        }
    }})
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
        
    
  (<div>
    <div><h1>RestaurantDetil {id}</h1>
    <h2>{resDetail.name}</h2>
    <img alt="restaurant-detail" src={ IMG_CDN_URL+resDetail.cloudinaryImageId}></img>
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
            </li>
        ))}
        
    </ul>
    
    </div>
    </div>
  )
}

export default RestaurantDetail