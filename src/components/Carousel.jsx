import React from 'react';
import Slider from 'react-slick'; 

const Carousel = ({ images, titles = [] }) => {
// carousel settings
const settings = {
    dots: true, // Show navigation points

    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Display 3 images at a time

    slidesToScroll: 1,
    draggable: true, // Possibility of withdrawal
    autoplay: true, // Automatic move

    autoplaySpeed: 5000, // Move every 5 seconds
    responsive: [
      {
        breakpoint: 768, // For smaller screens

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-4 overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative flex-shrink-0 px-2"> {/* Space between images */}
              
            {/* img */}
            <img
              src={img}
              alt={`Image ${index}`}
              className="w-full h-45 object-cover rounded-lg"
            />

           {/* transparent black background */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

           {/* text inside the image */} 
            <div className="absolute bottom-0 left-0 right-20 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center">
                {titles[index] || "No Title"} {/* Default text if no title */
                 }
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
