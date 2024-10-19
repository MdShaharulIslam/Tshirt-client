import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rating = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      rating: 5,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute -top-16 right-4 z-10 p-3 text-4xl cursor-pointer transform -translate-y-1/2"
      onClick={onClick}
    >
      →
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute -top-16 right-16 z-10 p-3 text-4xl cursor-pointer transform -translate-y-1/2"
      onClick={onClick}
    >
      ←
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100 mb-32">
      <h2 className="text-4xl w-[286px] lg:w-full font-extrabold text-left pl-6 mb-8">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="max-w-full mx-8 space-x-16 relative">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 h-64 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold text-center">{review.name}</h3>
              <div className="flex items-center justify-center my-2">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${
                      starIndex < review.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-center overflow-hidden text-ellipsis">
                {review.review}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Rating;
