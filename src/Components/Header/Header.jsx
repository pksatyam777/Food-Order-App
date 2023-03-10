// import React , {useState} from 'react'
// import { Link } from 'react-router-dom'
// import useOnline from '../../Utils/useOnline'
// import { useContext } from 'react'
// import Context from '../../Context/Context'
// import {useSelector} from "react-redux"

// const AuthenticateUser=()=>{

//     return true
// }
// function Header() {
//     const {Theme,setTheme}=useContext(Context)
//     const [auth,setAuth]=useState(false)


//     const AuthUser=()=>{
//         if(auth) {setAuth(false)}
//         else{setAuth(true)}
//     }
//     const CartItems=useSelector(store => store.cart.items)
//     console.log(CartItems)
//     const IsOnline=useOnline()
    
//   return (<div className={`header  flex  justify-between ${Theme.color}`}>
//     <a href='/'><img  className='logo h-24 p-2 bg-transparent ml-24 ' src='./green.png' alt='logo'></img></a>
//     <div className="nav-items">
    
//     <ul className='flex py-10 mr-40'>

//       <Link to='/'><li className='px-5 text-green-500'>Home</li></Link>
//       <Link to='/about'><li className='px-5 text-green-500'>About</li></Link>
//       <Link to='/contact'><li className='px-5 text-green-500'>Contact Us</li></Link>
//       <Link to='/cart'><li className='px-5 align-middle text-green-500'>Cart{CartItems.length}</li></Link>
//     </ul>
//     {/* <h1>{!IsOnline ? '😭':'😭😭'}</h1> */}
//   </div>
  
  
//   <div className='auth-button py-10'>
//     {/* <button className=' border-cyan-700' onClick={e=>Theme.color==  "bg-emerald-200"?setTheme({color:"bg-lime-200"}):setTheme({color:"bg-emerald-200"})}> Change Color</button> */}
//     {auth?
//   <>
//   <button onClick={AuthUser}>login</button></>:<button onClick={AuthUser}>Logout</button>}
//   {/* <span>{Theme.color} - {Theme.email}</span> */}
//   </div>
//   </div>
//   )
// }

// export default Header
import React,{ Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link,useLocation,useParams , NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaCircle} from 'react-icons/fa'
import firebase from 'firebase/compat';
import { useSelector } from 'react-redux';
import logo from "../../../public/logo.svg"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [active,setActive]=useState('/')
  const [auth,setAuth]=useState(false)
  const [user, setUser] = useState(null);
  const url=useLocation()
  const CartItems=useSelector(store => store.cart.items)
  const navigation = [
    { name: 'Home', href: '/', current: url.pathname=="/"?true:false },
    { name: 'About', href: '/about', current: url.pathname=="/about"?true:false },
    { name: 'Contact', href: '/contact', current: url.pathname=="/contact"?true:false },
    { name: '', href: '/cart', current: url.pathname=="/cart"?true:false , icon: <><AiOutlineShoppingCart style={{display:"inline"}} size={20} />{CartItems.length==0?null:CartItems.length}</>},
  ]
  

  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, set the user state
        setUser(user);
      } else {
        // User is signed out, clear the user state
        setUser(null);
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  },[])
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => {
        // User has signed out successfully
        console.log('User has signed out successfully');
      })
      .catch((error) => {
        // Handle signout errors
        console.error(error);
      });
    }
    // fixed top-0 w-full z-10
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[86rem] px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className=" h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        activeClassname
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name} <span>{item.icon?item.icon:null} </span> 
                        
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {user ?
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a onClick={handleSignOut}
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>:
                <div className="flex space-x-4 text-white cursor-pointer hover:text-green-300"><Link to='/login'>{"Login"}</Link></div>}
              </div>{console.log(user)}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC6lEMBuTS6246WW5zpqVI8Q34gWpce4Nc",
//   authDomain: "foodvilla-4c9eb.firebaseapp.com",
//   projectId: "foodvilla-4c9eb",
//   storageBucket: "foodvilla-4c9eb.appspot.com",
//   messagingSenderId: "667172268315",
//   appId: "1:667172268315:web:9457c5498c8088e7308bbe",
//   measurementId: "G-S2DX7P5DQL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);