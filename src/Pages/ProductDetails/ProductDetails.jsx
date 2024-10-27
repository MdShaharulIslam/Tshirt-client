import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "Olive", colorCode: "#6B664F" },
    { name: "Navy", colorCode: "#2E3B4E" },
    { name: "Black", colorCode: "#000000" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const location = useLocation();
  const { product } = location.state || {}; 

  if (!product) {
    return <div>No product found!</div>; 
  }

  return (
    <div className="container mx-auto p-4 md:flex md:space-x-8">
      <div className="flex">
        <div className="flex flex-col space-y-4 md:w-1/3 h-96">
          <img
            src={product.image}
            alt="Thumbnail 1"
            className="w-32 rounded-lg cursor-pointer"
          />
          <img
            src={product.image}
            alt="Thumbnail 2"
            className="w-32 rounded-lg cursor-pointer"
          />
          <img
            src={product.image}
            alt="Thumbnail 3"
            className="w-32  rounded-lg cursor-pointer"
          />
        </div>

        <div className="md:w-2/3 flex flex-col space-y-4 ml-4">
          {" "}
          {/* Adjust width as needed */}
          {/* Main Image */}
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg object-cover w-full h-96"
          />
        </div>
      </div>

      <div className="md:w-1/2 space-y-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        {/* Ratings */}
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-500">⭐⭐⭐⭐⭐</div>
          <span className="text-gray-600">4.5/5</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="line-through text-gray-400">
            ${product.originalPrice}
          </span>
          <span className="text-2xl font-bold text-red-600">
            ${product.discountedPrice}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm">
            -40%
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          {product.description || "No description available for this product."}
        </p>

        {/* Color Selector */}
        <div>
          <h3 className="text-lg font-semibold">Select Color:</h3>
          <div className="flex space-x-4 mt-2">
            {colors.map((color) => (
              <span
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                style={{ backgroundColor: color.colorCode }}
                className={`w-8 h-8 rounded-full cursor-pointer ${
                  selectedColor === color.name ? "ring-4 ring-gray-500" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h3 className="text-lg font-semibold">Choose Size:</h3>
          <div className="flex space-x-4 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSize === size
                    ? "bg-gray-800 text-white"
                    : "border-gray-400 text-gray-600"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold">Quantity:</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600"
            >
              -
            </button>
            <span className="px-4 py-2 border border-gray-400 rounded-lg">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
