import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

// Create the router
export const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Main></Main>, // Main layout with navigation
    children: [
      {
        path: "/", // Home route
        element: <Home></Home>, // Home component
      },
      {
        path: "product/:name", // Dynamic product detail route
        element: <ProductDetails></ProductDetails>, // ProductDetails component
      },
    ],
  },
]);
