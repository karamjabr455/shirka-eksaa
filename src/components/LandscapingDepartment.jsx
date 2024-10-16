import React from 'react';
import { Link } from 'react-router-dom'; 
import Carousel from './Carousel'; 
import vectorIcon from '../picture/Vector.png'; 

import shrubImage1 from '../picture/r1.png'; 
import shrubImage2 from '../picture/r2.png';
import shrubImage3 from '../picture/r3.png';

import pavementImage1 from '../picture/r4.png';
import pavementImage2 from '../picture/r5.png';
import pavementImage3 from '../picture/r6.png';

//Texts associated with images

const shrubTitles = ["Beautiful Shrub 1", "Elegant Shrub 2", "Vibrant Shrub 3"];
const pavementTitles = ["Stylish Pavement 1", "Modern Pavement 2", "Classic Pavement 3"];

// Create image data for each partition
const shrubImages = [shrubImage1, shrubImage2, shrubImage3];
const pavementImages = [pavementImage1, pavementImage2, pavementImage3];

const LandscapingDepartment = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-black text-2xl font-bold mb-4 w-full bg-[#59ED9F] py-6 px-4">
          Landscaping Department
        </h2>

        {/* Section Shrubs */}
        <Section title="Shrubs" images={shrubImages} titles={shrubTitles} />

        {/* Section Pavements */}
        <Section title="Pavements" images={pavementImages} titles={pavementTitles} />
      </div>
    </div>
  );
};

// Create a global component for partitions
const Section = ({ title, images, titles }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-1 bg-[#59ED9F] mr-2"></div> 
          <h2 className="text-black text-2xl">{title}</h2>
        </div>
{/* Show all button with navigation to details page */}
<Link to={`/details/${title}`}>
          <button className="flex items-center bg-[#14B05D] text-[#EEF9F3] text-sm px-4 py-2 rounded-md">
            <img src={vectorIcon} alt="Show All Icon" className="w-4 h-4 mr-2" /> 
            <span>Show All</span>
          </button>
        </Link>
      </div>
      <Carousel images={images} titles={titles} />
    </div>
  );
};

export default LandscapingDepartment;
