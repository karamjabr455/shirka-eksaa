import React from 'react';
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

const floorTitles = ["light shade butterscotch oak", "dark shade butterscotch oak", "#shade #type"];
const wallsTitles = ["#shade #type", "#shade #type", "#shade #type"];
const sinkTitles = ["#shade #type", "#shade #type", "#shade #type"];
const faucetTitles = ["#shade #type", "#shade #type", "#shade #type"];
const kitchenTitles = ["#shade #type", "#shade #type", "#shade #type"];

const floorImages = [floorImage1, floorImage2, floorImage3];
const wallsImages = [wallsImage1, wallsImage2, wallsImage3];
const sinkImages = [sinkImage1, sinkImage2, sinkImage3];
const faucetImages = [faucetImage1, faucetImage2, faucetImage3];
const kitchenImages = [kitchenImage1, kitchenImage2, kitchenImage3];

const InteriorCladding = () => {
  console.log('Floor Images:', floorImages);
  console.log('Walls Images:', wallsImages);
  console.log('Sinks Images:', sinkImages);
  console.log('Faucets Images:', faucetImages);
  console.log('Kitchens Images:', kitchenImages);

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-black text-2xl font-bold mb-4 w-full bg-[#59ED9F] py-6 px-4">
          Interior Cladding
        </h2>

        <Section title="Floors" images={floorImages} titles={floorTitles} />
        <Section title="Walls" images={wallsImages} titles={wallsTitles} />
        <Section title="Sinks" images={sinkImages} titles={sinkTitles} />
        <Section title="Faucets" images={faucetImages} titles={faucetTitles} />
        <Section title="Kitchens" images={kitchenImages} titles={kitchenTitles} />
      </div>
    </div>
  );
};

const Section = ({ title, images, titles }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-1 bg-[#59ED9F] mr-2"></div>
          <h2 className="text-black text-2xl">{title}</h2>
        </div>
        <Link to={`/details/${title}`}>
        <button className="flex items-center bg-[#074143] text-[#EEF9F3] text-sm px-4 py-2 rounded-md">
    <img src={vectorIcon} alt="Show All Icon" className="w-4 h-4 mr-2" />
    <span>Show All</span>
  </button>
</Link>
      </div>
      <Carousel images={images} titles={titles} />
    </div>
  );
};

export default InteriorCladding;
