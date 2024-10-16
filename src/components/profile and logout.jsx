import backgroundImage from '../picture/background-image.png'; 
import profilePicture from '../picture/replicate-prediction-a10a7eeba1rgc0cgjvsv6yv75w.png'; 
import Navbar from './NavBar'; 
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'; // Import logout icon from v2


export default function Portfolio() {
  return (
    
    <div className="relative w-full h-screen overflow-hidden">
            <Navbar /> 

      {/* Top section - background */}
      <div className="relative h-1/2">
        <img
          src={backgroundImage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

     {/*Bottom Section - Profile Information */}
      <div className="relative h-1/2 flex flex-col md:flex-row">
       {/* right section */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 md:p-8 flex items-start justify-start">
         {/* Profile photo and information */}
          <div className="flex items-start space-x-4">
           {/* profile picture */}
            <div className="relative mt-[-60px] md:mt-[-80px]">
              <img
                src={profilePicture} 
                alt="Profile picture"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-500"
              />
            </div>

          {/* Profile information in the right section */}
            <div className="flex flex-col space-y-2 mt-2">
              <p className="text-sm md:text-lg text-[#14B05D]">NAME</p>
              <p className="text-sm md:text-lg text-[#14B05D]">COUNTRY</p>
              <p className="text-sm md:text-lg text-[#14B05D]">EMAIL</p>
              <p className="text-sm md:text-lg text-[#14B05D]">PHONE</p>
            </div>
          </div>
          
        </div>
        

        {/*left section*/}
        <div className="w-full md:w-3/4 bg-[#031C1D] p-4 md:p-8 text-white flex flex-col justify-between">
          {/* Profile information in the left section */}
          <div className="flex flex-col space-y-2 md:space-y-4">
            <p className="text-sm md:text-lg">karam jaber</p>
            <p className="text-sm md:text-lg">Syria . Damascus  . Jamraya</p>
            <p className="text-sm md:text-lg">abua33012@gmail.com</p>
            <p className="text-sm md:text-lg">0996369002</p>
          </div>

          {/*Log out button*/}
          <button className="self-end flex items-center bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-red-600 transition-colors transform translate-y-[-60px]">
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" /> {/*Log out icon*/}
            LOGOUT
          </button>
 
        </div>
      </div>
    </div>
  );
}
