import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom'; 

import vectorIcon from '../picture/Vector.png'; // Import the Show All icon


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

const ImageGrid = ({ title, images }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
{/* Center the internal title of each section */}
<h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {images.map((src, index) => (
        <div key={index} className="aspect-w-4 aspect-h-3">
          <img src={src} alt={`${title} ${index + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
    <div className="text-center">
      {/* button Show All */}
      <Link to={`/details/${title}`}>
        <button className="flex items-center bg-[#074143] text-[#EEF9F3] text-sm px-4 py-2 rounded-md">
          <img src={vectorIcon} alt="Show All Icon" className="w-4 h-4 mr-2" />
          <span>Show All</span>
        </button>
      </Link>
    </div>
  </div>
);

export default function BusinessExhibition() {
  const [isInView, setIsInView] = useState(false); // Check if the element is visible
  const [hasScrolled, setHasScrolled] = useState(false); // To verify that the item has passed

  const handleScroll = () => {
    const section = document.getElementById('business-exhibition');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the top distance of the section is less than the window height, it becomes visible
      if (sectionTop < windowHeight) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView && !hasScrolled) {
      setHasScrolled(true); // To ensure that the movement occurs only once

    }
  }, [isInView]);

  const interiorImages = [
    interiorImage1,
    interiorImage2,
    interiorImage3,
    interiorImage4,
    interiorImage5,
    interiorImage6,
  ];

  const exteriorImages = [
    exteriorImage1,
    exteriorImage2,
    exteriorImage3,
    exteriorImage4,
    exteriorImage5,
    exteriorImage6,
  ];

  return (
    <section className="bg-[#7ebcbb]" id="business-exhibition">
      <div className="py-4">
      {/* Make the main title on the left */}
        <h2 className="text-3xl font-bold text-left">BUSINESS EXHIBITION</h2>
      </div>
      <div className="container mx-auto px-4 py-8 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8">
 {/* INTERIOR SECTION MOVEMENT */}
           <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={hasScrolled ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageGrid title="INTERIOR" images={interiorImages} />
          </motion.div>

 {/* EXTERIOR SECTION MOVEMENT */}
 <motion.div
            className="w-full md:w-1/2 px-4"
            initial={{ x: '100vw', opacity: 0 }}
            animate={hasScrolled ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageGrid title="EXTERIOR" images={exteriorImages} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
