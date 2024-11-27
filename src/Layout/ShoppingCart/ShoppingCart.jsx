import React from 'react';
import img1 from '../../assets/Frame 33.png';
import img2 from '../../assets/Frame 38.png';
import img3 from '../../assets/Frame 34.png';

import { FiTrash2 } from 'react-icons/fi'; // Importing an icon for the delete button

const CartItem = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b">
      {/* Product Image */}
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        {/* Product Details */}
        <div>
          <h2 className="font-semibold text-lg">{item.name}</h2>
          <p className="text-gray-500">Size: {item.size}</p>
          <p className="text-gray-500">Color: {item.color}</p>
        </div>
      </div>

      {/* Price and Quantity Controls */}
      <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
        <p className="font-bold text-xl">${item.price}</p>
        <div className="flex items-center space-x-2 border px-2 py-1 rounded-full">
          <button className="text-gray-700">-</button>
          <span>{item.quantity}</span>
          <button className="text-gray-700">+</button>
        </div>
        <button className="text-red-500">
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const cartItems = [
    {
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
      image: img1,
    },
    {
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
      image: img2,
    },
    {
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
      image: img3,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0.2 * subtotal;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-8 bg-white rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Cart Items Section */}
      <div className="lg:w-2/3">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">YOUR CART</h1>
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 bg-gray-50 p-4 lg:p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount}</span> 
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        {/* Promo Code and Checkout */}
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-2 border rounded-lg focus:outline-none"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg">
              Apply
            </button>
          </div>
          <button className="w-full py-3 bg-black text-white rounded-lg flex justify-center items-center space-x-2">
            <span>Go to Checkout</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
