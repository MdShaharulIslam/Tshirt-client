import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from '../Review/Reviews';

export default () => (
  <div className="container mx-auto p-6">
    {/* Tabs Container */}
    <Tabs className="w-full">
      {/* Tab Navigation */}
      <TabList className="flex justify-center space-x-8 border-b border-gray-300 mb-6">
        <Tab
          className="text-lg font-medium cursor-pointer py-2 px-4 hover:text-black"
          selectedClassName="border-b-4 border-black text-black"
        >
          Product Details
        </Tab>
        <Tab
          className="text-lg font-medium cursor-pointer py-2 px-4 hover:text-black"
          selectedClassName="border-b-4 border-black text-black"
        >
          Rating & Reviews
        </Tab>
        <Tab
          className="text-lg font-medium cursor-pointer py-2 px-4 hover:text-black"
          selectedClassName="border-b-4 border-black text-black"
        >
          FAQs
        </Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanel>
        <div className="text-center text-gray-500">
          <h2 className="text-xl mb-4">Product Details Content Here</h2>
        </div>
      </TabPanel>
      <TabPanel>
        {/* Reviews Section */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">All Reviews (451)</h2>
            <div className="flex space-x-4">
              <button className="text-sm px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-200">Latest</button>
              <button className="text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800">Write a Review</button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-white shadow-md rounded-lg border">
              <h3 className="text-lg font-bold">Samantha D. <span className="text-green-500">&#10004;</span></h3>
              <p className="text-gray-700 mt-2">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable..."
              </p>
              <p className="text-sm text-gray-500 mt-4">Posted on August 14, 2023</p>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg border">
              <h3 className="text-lg font-bold">Alex M. <span className="text-green-500">&#10004;</span></h3>
              <p className="text-gray-700 mt-2">
                "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch..."
              </p>
              <p className="text-sm text-gray-500 mt-4">Posted on August 15, 2023</p>
            </div>

            {/* Add more review cards similarly */}
          </div>

          {/* Load More Button */}
          <button className="mx-auto block text-sm px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
            Load More Reviews
          </button>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="text-center text-gray-500">
          <h2 className="text-xl mb-4">FAQs Content Here</h2>
        </div>
      </TabPanel>
    </Tabs>
  </div>
);
