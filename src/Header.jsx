import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import useOnline from './Utils/useOnline'
const AuthenticateUser=()=>{

    return true
}
function Header() {
    const [auth,setAuth]=useState(false)


    const AuthUser=()=>{
        if(auth) {setAuth(false)}
        else{setAuth(true)}
    }
    const IsOnline=useOnline()
  return (<div className='header  flex  justify-between bg-emerald-100'>
    <a href='/'><img  className='logo h-28 p-2' src='https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7' alt='logo'></img></a>
    <div className="nav-items">
    
    <ul className='flex py-10'>

      <Link to='/'><li className='px-4'>Home</li></Link>
      <Link to='/about'><li className='px-4'>About</li></Link>
      <Link to='/contact'><li className='px-4'>Contact Us</li></Link>
      <Link to='/cart'><li className='px-4'>Cart</li></Link>
    </ul>
    {/* <h1>{!IsOnline ? '😭':'😭😭'}</h1> */}
  </div>
  <div className='auth-button py-10'>
    {auth?
  
  <button onClick={AuthUser}>login</button>:<button onClick={AuthUser}>Logout</button>}
  </div>
  </div>
  )
}

export default Header