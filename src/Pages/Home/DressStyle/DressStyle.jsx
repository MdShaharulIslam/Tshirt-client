import React from 'react';
import casualImg from '../../../assets/casual.png'; 
import formalImg from '../../../assets/formal.png';
import partyImg from '../../../assets/party.png';
import gymImg from '../../../assets/gym.png';
import { Link } from 'react-router-dom';

const DressStyle = () => {
  return (
    <section className="py-12 bg-[#f5f5f5] rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">BROWSE BY DRESS STYLE</h2>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto gap-4">
        
        {/* First Row */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-4">
  {/* Larger Image */}
  <div className="w-full lg:w-1/3">
   <Link to='casual'>  <img src={casualImg} alt="Casual" className="w-full object-cover h-[289px]" /></Link>
   
  </div>

  {/* Smaller Image */}
  <div className="w-full lg:w-2/3">
    <img src={formalImg} alt="Formal" className="w-full object-cover h-[289px]" />
  </div>
</div>


        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="flex-1 w-full lg:w-2/3">
            <img src={partyImg} alt="Party" className="w-full object-cover 
            h-[289px]" />
          </div>
          <div className="flex-1 w-full lg:w-1/3">
            <img src={gymImg} alt="Gym" className="w-full object-cover h-[289px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
