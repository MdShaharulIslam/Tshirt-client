import banner from "../../../assets/bannerImage.png";

const Banner = () => {
  return (
    <div>
      <div className="w-full p-0 mb-16">
        <div className="flex flex-col lg:flex-row items-center w-full h-auto lg:h-[663px] bg-[#F2F0F1] relative">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-black mb-4 leading-snug">
              FIND CLOTHES <br /> THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-6 w-44 px-4 py-2 text-sm font-semibold tracking-wide text-white uppercase bg-black rounded-lg hover:bg-gray-800 transition-colors">
              Shop Now
            </button>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center space-y-6 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-8 lg:space-x-8 mt-8">
              {/* International Brands */}
              <div className="w-full sm:w-1/2 md:w-auto text-center">
                <h2 className="text-3xl font-bold">200+</h2>
                <p className="text-gray-500">International Brands</p>
              </div>

              <div className="border-l-2 h-12 border-gray-400 hidden lg:block"></div>

              <div className="w-full sm:w-1/2 md:w-auto text-center">
                <h2 className="text-3xl font-bold">2,000+</h2>
                <p className="text-gray-500">High-Quality Products</p>
              </div>

              <div className="border-l-2 h-12 border-gray-400 hidden lg:block"></div>

              <div className="w-full md:w-auto text-center">
                <h2 className="text-3xl font-bold">30,000+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full lg:h-full">
            <img
              className="w-full h-full object-cover mt-0"
              src={banner}
              alt="Banner"
            />
          </div>
        </div>

        {/* Brand section */}
        <div className="bg-black w-full items-center p-4">
          <div className="lg:flex md:flex items-center text-center justify-evenly mt-4">
            <p className="text-center text-white dark:text-gray-400 font-extrabold text-4xl">
              VERSACE
            </p>
            <p className="text-center text-white dark:text-gray-400 font-extrabold text-4xl mx-4">
              ZARA
            </p>
            <p className="text-center text-white dark:text-gray-400 font-extrabold text-4xl mx-4">
              GUCCI
            </p>
            <p className="text-center text-white dark:text-gray-400 font-extrabold text-4xl mx-4">
              PRADA
            </p>
            <p className="text-center text-white dark:text-gray-400 text-4xl mx-4">
              Calvin Klein
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
