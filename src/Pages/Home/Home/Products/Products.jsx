// App.jsx
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.6,
    discount: 0,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.8,
    discount: 0,
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
  
//   export default Sidebar;
  

const ProductCard = ({ product }) => (
  <div className="border rounded-md p-4">
    <img src={product.image} alt={product.title} className="w-full mb-4" />
    <h3 className="font-semibold text-lg">{product.title}</h3>
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

const ProductGrid = () => (
  <div className="p-4 w-3/4">
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="mt-4 flex justify-center">
      <button className="px-4 py-2 border">Previous</button>
      <button className="px-4 py-2 border">Next</button>
    </div>
  </div>
);

const App = () => (
  <div className="flex">
    <Sidebar />
    <ProductGrid />
  </div>
);

export default App;
