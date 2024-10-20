const SubFooter = () => {
  return (
    <>
      <div className="bg-black w-2/3 m-auto p-4 items-center rounded-md mt-8">
        <div className="flex-col-1 lg:flex md:flex justify-between items-center mt-4">
          <p className="text-left text-white dark:text-gray-400 font-extrabold text-2xl">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </p>
          <div className="flex flex-col mx-auto mt-6 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
            <div className="flex flex-col lg:flex-col space-y-3  items-center">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-full"
                  placeholder="Enter Your Email"
                />
              </label>
              <button className="btn w-full sm:w-auto sm:px-6 sm:py-3 px-4 py-2 bg-white text-black rounded-md  transition-all">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubFooter;
