import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import img1 from "../../../../assets/top1.png";
import img2 from "../../../../assets/top2.png";
import img3 from "../../../../assets/top3.png";
import img4 from "../../../../assets/top4.png";

// Mock product data
const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    image: img1,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: img2,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    image: img3,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: img4,
  },
  {
    id: 5,
    name: "Classic Hoodie",
    price: 150,
    originalPrice: 200,
    discount: 50,
    rating: 4.0,
    image: img1,
  },
  {
    id: 6,
    name: "Summer Shorts",
    price: 90,
    originalPrice: 120,
    discount: 30,
    rating: 3.0,
    image: img2,
  },
];
const Sidebar = () => {
    return (
      <aside className="p-4 bg-white shadow-md w-64">
        {/* Filters Heading */}
        <h2 className="text-lg font-bold mb-4">Filters</h2>
  
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category) => (
              <li key={category} className="cursor-pointer hover:underline">
                {category}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="flex items-center justify-between mb-2">
            <span>$50</span>
            <span>$200</span>
          </div>
          <input type="range" min="50" max="200" className="w-full" />
        </div>
  
        {/* Colors */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="grid grid-cols-5 gap-2">
            {["green", "yellow", "red", "blue", "pink", "purple", "cyan", "black", "white"].map(
              (color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer`}
                  style={{ backgroundColor: color }}
                ></div>
              )
            )}
          </div>
        </div>
  
        {/* Size */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"].map((size) => (
              <button
                key={size}
                className="border px-3 py-1 text-sm rounded hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
  
        {/* Dress Style */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Dress Style</h3>
          <ul className="space-y-2">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li key={style} className="cursor-pointer hover:underline">
                {style}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Apply Button */}
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Apply Filter
        </button>
      </aside>
    );
  };
const ProductCard = ({ product }) => (
  <div className="border rounded-md p-4">
    <img src={product.image} alt={product.name} className="w-full mb-4" />
    <h3 className="font-semibold text-lg">{product.name}</h3>
    <div className="flex items-center my-2">
      {Array(Math.floor(product.rating))
        .fill()
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      {product.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400" />}
    </div>
    <p className="text-gray-700 text-lg">${product.price}</p>
  </div>
);

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the indexes of the products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="p-4 w-3/4">
      <div className="grid grid-cols-3 gap-4">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
const App = () => (
    <div className="flex sm:flex-col lg:flex-row md:flex-row ">
      <Sidebar />
      <ProductGrid />
    </div>
  );
  
  export default App;

