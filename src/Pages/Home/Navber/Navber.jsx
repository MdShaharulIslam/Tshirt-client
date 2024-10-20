import { useState } from 'react';
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Section: Toggle Button and Logo */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="text-gray-500 dark:text-gray-200 md:hidden focus:outline-none"
            aria-label="toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link to="#" className="text-4xl font-extrabold ">
            SHOP.CO
          </Link>
        </div>

        {/* Center Section: Links (hidden on small screens) */}
        <div
          className={`${
            isOpen ? 'hidden' : 'hidden'
          } md:flex items-start space-x-6`}
        >
          <Link
            to="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            to="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            On Sale
          </Link>
          <Link
            to="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            New Arrivals
          </Link>
          <Link
            to="#"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Brands
          </Link>
        </div>

        {/* Right Section: Search, Cart, and User Icons */}
        <div className="relative flex items-center space-x-4">
        <div className="relative md:block">
  <input
    type="text"
    className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border-none md:border md:pl-10 md:pr-4 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:md:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
    placeholder="Search"
  />
  <span className="absolute inset-y-0 right-0 flex items-center pr-3 md:left-0 md:right-auto md:pl-3">
    <svg
      className="w-5 h-5 text-gray-400"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </span>
</div>


          {/* Cart Icon */}
          <Link to="#" className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
            <FaShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 p-1 text-xs text-white bg-blue-500 rounded-full">0</span>
          </Link>

          {/* User Icon */}
          <Link to="#" className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
            <FaUser className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-2 py-4">
            <Link
              to="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              to="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              On Sale
            </Link>
            <Link
              to="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              New Arrivals
            </Link>
            <Link
              to="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Brands
            </Link>
            <div className="relative mt-2 w-full px-4">
              
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
