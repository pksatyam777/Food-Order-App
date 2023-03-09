import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/Body/About';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import Contact from './Components/Body/contact';
import Body from './Components/Body/Body';
import RestaurantDetail from './Components/Body/RestaurantDetail';
import Cart from './Components/Body/Cart';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
const AppRouter=createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={AppRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

