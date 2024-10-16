import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar'; 

// Import images
import floorImage1 from '../picture/Rectangle 39.png';
import floorImage2 from '../picture/Rectangle 40.png';
import floorImage3 from '../picture/Rectangle 41.png';
import wallsImage1 from '../picture/Rectangle 411.png';
import wallsImage2 from '../picture/Rectangle 420.png';
import wallsImage3 from '../picture/Rectangle 393.png';
import sinkImage1 from '../picture/Rectangle 040.png';
import sinkImage2 from '../picture/Rectangle 041.png';
import sinkImage3 from '../picture/Rectangle0 39.png';
import faucetImage1 from '../picture/Rectangle 300.png';
import faucetImage2 from '../picture/Rectangle100.png';
import faucetImage3 from '../picture/Rectangle 200.png';
import kitchenImage1 from '../picture/Rectangle 401.png';
import kitchenImage2 from '../picture/Rectangle 402.png';
import kitchenImage3 from '../picture/Rectangle 403.png';
import shrubImage1 from '../picture/r1.png'; 
import shrubImage2 from '../picture/r2.png';
import shrubImage3 from '../picture/r3.png';

import pavementImage1 from '../picture/r4.png';
import pavementImage2 from '../picture/r5.png';
import pavementImage3 from '../picture/r6.png';


import interiorImage1 from '../picture/Rectangle 55.png';
import interiorImage2 from '../picture/Rectangle 56.png';
import interiorImage3 from '../picture/Rectangle 57.png';
import interiorImage4 from '../picture/Rectangle 58.png';
import interiorImage5 from '../picture/Rectangle 59.png';
import interiorImage6 from '../picture/Rectangle 60.png';

import exteriorImage1 from '../picture/Rectangle 61.png';
import exteriorImage2 from '../picture/Rectangle 62.png';
import exteriorImage3 from '../picture/Rectangle 63.png';
import exteriorImage4 from '../picture/Rectangle 64.png';
import exteriorImage5 from '../picture/Rectangle 65.png';
import exteriorImage6 from '../picture/Rectangle 66.png';


const SectionDetails = () => {
  const { title } = useParams(); // Get the 'title' parameter from the URL
 // fetch data based on 'title'
  const sectionData = {
    Floors: {
      images: [floorImage1, floorImage2, floorImage3],
      titles: ['light shade butterscotch oak', 'dark shade butterscotch oak', '#shade #type']
    },
    Walls: {
      images: [wallsImage1, wallsImage2, wallsImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    Faucets: {
      images: [faucetImage1, faucetImage2, faucetImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    Sinks: {
      images: [sinkImage1, sinkImage2, sinkImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    Kitchens: {
      images: [kitchenImage1, kitchenImage2, kitchenImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    Shrubs: {
      images: [shrubImage1, shrubImage2, shrubImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    Pavements: {
      images: [pavementImage1, pavementImage2, pavementImage3],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
    EXTERIOR: {
      images: [interiorImage1, interiorImage2, interiorImage3 ,interiorImage4,interiorImage5,interiorImage6],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    }, INTERIOR: {
      images: [exteriorImage1, exteriorImage2, exteriorImage3 ,exteriorImage4,exteriorImage5,exteriorImage6],
      titles: ['#shade #type', '#shade #type', '#shade #type']
    },
  };

  const section = sectionData[title] || {};
  const images = section.images || [];
  const titles = section.titles || [];

  return (
    <>
      <Navbar /> 
      
      <div className="container mx-auto py-0">
        {title ? (
          <>
            <h1 className="text-black text-2xl font-bold mb-4 w-full bg-[#abd4d1] py-6 px-4">{title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt={titles[index] || "Image"} className="w-full h-60 object-cover rounded-lg" />
                  <h3 className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">{titles[index] || "No Title"}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No details available.</p>
        )}
      </div>
    </>
  );
};

export default SectionDetails;
