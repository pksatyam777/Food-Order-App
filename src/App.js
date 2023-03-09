import React, { useState } from 'react';
import './Apps.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {Outlet} from 'react-router-dom';
import About from './Components/Body/About';
import Context from './Context/Context';
import { Provider } from 'react-redux';
import Store from './Utils/store';
function App() {
  const [Theme , setTheme]=useState({
    color:"bg-emerald-100",
    email:"new@gmail.com"
  })
  return (
    <Provider store={Store}>
    <Context.Provider value={{Theme:Theme,setTheme:setTheme}}>
    <Header /><Outlet/><Footer/>
    </Context.Provider>
    </Provider>
  );
}

export default App;
