import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Home/Home/Products/Products";

import ShoppingCart from './../Layout/ShoppingCart/ShoppingCart';

export const router = createBrowserRouter([
  {
    path: "/", 
    element: <Main></Main>, 
    children: [
      {
        path: "/", 
        element: <Home></Home>, 
      },
      {
        path: "product/:name", 
        element: <ProductDetails></ProductDetails>, 
      },
      {
        path: "casual", 
        element: <Products></Products>, 
      },
      {
        path: "cartitem", 
        element: <ShoppingCart></ShoppingCart>, 
      },
    ],
  },
]);
