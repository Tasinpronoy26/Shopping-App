import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Order from './Component/Order/Order';
import Home from './Component/Home/Home';
import Inventory from './Component/Inventory/Inventory';
import LogIn from './Component/LogIn/LogIn';
import cartProducts from './CartProducts/CartProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "OrderReview",
        element: <Order></Order>,
        loader: cartProducts
      },
      {
        path: "Inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "Login",
        element: <LogIn></LogIn>,
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
