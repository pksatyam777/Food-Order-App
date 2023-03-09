import React from 'react';
import './Apps.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import About from './About';


function App() {
  return (
    <><Header /><Outlet/><Footer/></>
  );
}

export default App;
