import React from 'react';
import ReactRating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
import img1 from '../../../../assets/top1.png';
import img2 from '../../../../assets/top2.png';
import img3 from '../../../../assets/top3.png';
import img4 from '../../../../assets/top4.png'; 

const TopSelling = () => {
  const products = [
    {
      name: "T-shirt with Tape Details",
      price: 120,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      image: img1,
    },
    {
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      discount: 20,
      rating: 3.5,
      image: img2,
    },
    {
      name: "Checkered Shirt",
      price: 180,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      image: img3,
    },
    {
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      discount: 30,
      rating: 4.5,
      image: img4,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>

            {/* React Rating Component */}
            <div className="flex items-center justify-center my-2">
              <ReactRating
                initialRating={product.rating}
                emptySymbol={<FaRegStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                fractions={2}  // Allows half-star ratings
                readonly
              />
              <span className="ml-2 text-gray-700">{product.rating}/5</span>
            </div>

            {/* Price and Discount */}
            <div className="text-xl font-bold">
              ${product.price}
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="ml-2 text-red-500">-{product.discount}%</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="text-black w-48 px-6 py-2 rounded-lg border transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default TopSelling;
