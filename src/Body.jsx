import React,{useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import { cards } from './constant'
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'
import useOnline from './Utils/useOnline'
function Body() {
    const [input,setInput] = useState('')
    const [allRestaurant,setAllRestaurant]=useState([])
    const [filteredrestaurant,setFilterRestaurant]=useState([])
    const handleSubmit=(input,restaurant)=>{
        let FilterData=restaurant.filter((item)=>item.data.name.toLowerCase().includes(input.toLowerCase()))
        console.log(FilterData)
        setFilterRestaurant(FilterData)
    }

useEffect(()=>{
 getRestaurant();
},[])

async function getRestaurant() {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.535666&lng=73.793546&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json();
    setAllRestaurant(json.data.cards[2].data.data.cards)
    setFilterRestaurant(json.data.cards[2].data.data.cards)
}
// if(filteredrestaurant.length === 0) return <h1> No Restaurant Found!</h1>
// if(allRestaurant.length ===0) return null;

return allRestaurant.length === 0? (<Shimmer />):(
    

  
    <>
    <div className='search-container flex bg-emerald-100 justify-center py-4'>
        <input type="text" className='w-60 search-input rounded-md px-2 focus-visible:active:border-none' placeholder='Search' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button className='search-btn w-24 p-2 mx-2 bg-green-500 text-white rounded-md border-2' onClick={()=>handleSubmit(input,allRestaurant)}>Search</button>
    </div>
    
    <div className='restaurant-list flex flex-wrap justify-center'>
        
        {filteredrestaurant.map((card,index)=>{
        return  <Link to={"/restaurant/"+ card.data.id} key={card.data.id}><RestaurantCard key ={index} data={card.data}/></Link>
    })}
    </div>
    </>
  
  )
}

export default Body