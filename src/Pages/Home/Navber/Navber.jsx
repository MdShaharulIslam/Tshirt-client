import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa"; // Importing React Icons

const SearchInput = ({ isInputVisible }) => {
  return (
    <div className="relative mt-4 md:mt-0">
      {isInputVisible && (
        <input
          type="text"
          className="w-full md:w-[400px] lg:w-[577px] py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Search"
        />
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="w-full">
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="flex justify-between items-center px-6 py-4 md:flex md:justify-between md:items-center">
          <div className="flex">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          <Link to="#">
            <h1 className="font-extrabold text-4xl">SHOP.CO</h1>
          </Link>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="#"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Shop
              </Link>
              <Link
                to="#"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                On Sale
              </Link>
              <Link
                to="#"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                New Arrivals
              </Link>
              <Link
                to="#"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Brands
              </Link>
            </div>
          </div>

          {/* Search Input Component */}
          <SearchInput isInputVisible={isInputVisible} />

          <span
            className="absolute left-0 flex items-center pl-3 cursor-pointer md:pl-6"
            onClick={toggleInput}
          >
            {!isInputVisible && <FaSearch className="w-5 h-5 text-gray-400" />}
          </span>

          <div className="flex items-center md:flex block">
            <Link
              to="#"
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 mx-4 flex items-center"
            >
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </Link>
            <Link
              to="#"
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 mx-4 flex items-center"
            >
              <FaUser className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
