import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 
import fullWidthImage from '../picture/Rectangle 31.png'; 

const FullWidthImage = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden"> 
      <img
        src={fullWidthImage}
        alt="Full Width"
        className="w-full h-full object-cover" 
      />
{/* black blur background */}
<div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          Transform your vision into reality with our<br />
          expert construction and landscaping services<br />
          where quality meets creativity.
        </h1>
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 rounded-md border-none outline-none text-gray-700"
          />
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 absolute left-3 top-2" /> 
        </div>
      </div>
    </div>
  );
};

export default FullWidthImage;
