import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import Contact from './contact';
import Cart from './Cart';
import Body from './Body';
import RestaurantDetail from './RestaurantDetail';
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

