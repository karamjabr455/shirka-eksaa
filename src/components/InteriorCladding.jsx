import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel'; 
import vectorIcon from '../picture/Vector.png';
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

const floorTitles = ["Light Shade Butterscotch Oak", "Dark Shade Butterscotch Oak", "#Shade #Type"];
const wallsTitles = ["#Shade #Type", "#Shade #Type", "#Shade #Type"];
const sinkTitles = ["#Shade #Type", "#Shade #Type", "#Shade #Type"];
const faucetTitles = ["#Shade #Type", "#Shade #Type", "#Shade #Type"];
const kitchenTitles = ["#Shade #Type", "#Shade #Type", "#Shade #Type"];

const floorImages = [floorImage1, floorImage2, floorImage3];
const wallsImages = [wallsImage1, wallsImage2, wallsImage3];
const sinkImages = [sinkImage1, sinkImage2, sinkImage3];
const faucetImages = [faucetImage1, faucetImage2, faucetImage3];
const kitchenImages = [kitchenImage1, kitchenImage2, kitchenImage3];

const InteriorCladding = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

 
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`py-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto">
        <h2 className={`text-2xl font-bold mb-4 w-full bg-[#59ED9F] py-6 px-4`}>
          Interior Cladding
        </h2>

        <Section title="Floors" images={floorImages} titles={floorTitles} isDarkMode={isDarkMode} />
        <Section title="Walls" images={wallsImages} titles={wallsTitles} isDarkMode={isDarkMode} />
        <Section title="Sinks" images={sinkImages} titles={sinkTitles} isDarkMode={isDarkMode} />
        <Section title="Faucets" images={faucetImages} titles={faucetTitles} isDarkMode={isDarkMode} />
        <Section title="Kitchens" images={kitchenImages} titles={kitchenTitles} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

const Section = ({ title, images, titles, isDarkMode }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-1 bg-[#59ED9F] mr-2"></div>
          <h2 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</h2>
        </div>
        <Link to={`/details/${title}`}>
          <button className="flex items-center bg-[#074143] text-[#EEF9F3] text-sm px-4 py-2 rounded-md">
            <img src={vectorIcon} alt="Show All Icon" className="w-4 h-4 mr-2" />
            <span>Show All</span>
          </button>
        </Link>
      </div>
      <Carousel images={images} titles={titles} isDarkMode={isDarkMode} />
    </div>
  );
};

export default InteriorCladding;
