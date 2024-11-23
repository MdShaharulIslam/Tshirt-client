import React, { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Samantha D.',
    date: 'August 14, 2023',
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to t-shirt.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex M.',
    date: 'August 15, 2023',
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Ethan R.',
    date: 'August 16, 2023',
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Olivia P.',
    date: 'August 17, 2023',
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only expresses those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Liam K.',
    date: 'August 18, 2023',
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Ava H.',
    date: 'August 19, 2023',
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Ava H.',
    date: 'August 19, 2023',
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
  },
];

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 6);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Reviews (451)</h2>
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-500 text-lg">Latest</button>
        <button className="bg-black text-white py-2 px-4 rounded-lg">Write a Review</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reviewsData.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="bg-white p-4 shadow rounded-lg">
            <div className="flex items-center mb-2">
              <div className="font-semibold text-lg">{review.name}</div>
              <span className="ml-2 text-green-500">● Verified</span>
            </div>
            <div className="flex items-center mb-2">
              {Array(review.rating).fill().map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-2">"{review.review}"</p>
            <div className="text-gray-500 text-sm">Posted on {review.date}</div>
          </div>
        ))}
      </div>
      {visibleReviews < reviewsData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreReviews}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
