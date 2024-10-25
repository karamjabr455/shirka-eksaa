import React, { useState, useEffect } from 'react';
import { FaSearch, FaList, FaTimes } from 'react-icons/fa';
import logoImage from '../picture/logo.png'; 
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import DarkModeToggle from './DarkModeToggle'; 
function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the list open/close
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`p-4 transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-[#0c7175] to-[#074143] text-white'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-xs sm:text-sm md:text-base">
            THE CONSTRUCTION AND<br />LANDSCAPING COMPANY
          </span>
        </div>

        <div className="hidden md:flex space-x-2">
          <button className="hover:bg-teal-600 px-2 py-1 rounded border-b-4 border-transparent hover:border-white text-xs sm:text-sm">
            <Link to="/landingpage">HOME</Link> 
          </button>

          <ScrollLink
            to="ABOUT"
            smooth={true}
            duration={800} className="hover:bg-teal-600 px-2 py-1 rounded border-b-4 border-transparent hover:border-white text-xs sm:text-sm cursor-pointer">
            ABOUT US
          </ScrollLink>

          <ScrollLink
            to="business-exhibition"
            smooth={true}
            duration={800} className="hover:bg-teal-600 px-2 py-1 rounded border-b-4 border-transparent hover:border-white text-xs sm:text-sm cursor-pointer">
            PROJECTS
          </ScrollLink>
        </div>

        <div className="flex items-center space-x-2">
          
          <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

          <div className="relative hidden lg:block">
            <input
              type="search"
              placeholder="SEARCH..."
              className={`pl-10 pr-2 py-1 rounded-md ${isDarkMode ? 'bg-gray-700 text-white placeholder-white' : 'bg-[#d7e9e3] text-black placeholder-black'} placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-300`}
              style={{ width: '200px' }} 
            />
            <FaSearch
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-black'}`}
              size={16}
            />
          </div>

          {/* LIST button to show its list */}
          <button
            className={`${isDarkMode ? 'bg-gray-700' : 'bg-teal-600 hover:bg-teal-500'} px-2 py-1 rounded flex items-center text-xs sm:text-sm`} 
            onClick={toggleList}
          >
            <FaList size={16} />
            <span className="ml-1 hidden sm:inline">LIST</span>
          </button>

          {/* the booking button */}
          <button
            className={`${isDarkMode ? 'bg-gray-700' : 'bg-[#59ED9F] hover:bg-teal-400'} text-white px-3 py-1 rounded border-4 border-white text-xs sm:text-sm`} 
            style={{ borderWidth: '3px' }}
          >
            BOOK NOW
          </button>

          {/* MENU button to show links in medium and small screens */}
          <button
            className={`md:hidden ${isDarkMode ? 'bg-gray-700' : 'bg-teal-600 hover:bg-teal-500'} px-2 py-1 rounded flex items-center text-xs sm:text-sm`}
            onClick={toggleMenu}
          >
            <FaList size={16} />
            <span className="ml-1">MENU</span>
          </button>
        </div>
      </div>

      {isListOpen && (
        <div
          className={`absolute top-20 right-4 w-64 rounded-lg z-50 flex flex-col items-center p-4 shadow-lg ${isDarkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-black'}`}
        >
          {/* close button */}
          <button className="self-end text-xl" onClick={toggleList}>
            <FaTimes />
          </button>
          <a href="#list-item-1" className="text-lg hover:underline py-1">Landscaping</a>
          <a href="#list-item-2" className="text-lg hover:underline py-1">Decking</a>
          <a href="#list-item-3" className="text-lg hover:underline py-1">Gardening</a>
          <a href="#list-item-4" className="text-lg hover:underline py-1">Interlocking</a>
          <a href="#list-item-5" className="text-lg hover:underline py-1">Pools</a>
          <a href="#list-item-6" className="text-lg hover:underline py-1">Railings</a>
          <a href="#list-item-7" className="text-lg hover:underline py-1">Showroom</a>
          <Link to="/profile" className="text-lg hover:underline py-1">Profile</Link>
          <ScrollLink to="footer" smooth={true} duration={800} className="text-lg hover:underline py-1 cursor-pointer">Contact Us</ScrollLink>
        </div>
      )}

      {/* List of links when pressing MENU in medium and small screens */}
      {isMenuOpen && (
        <div
          className={`absolute top-20 right-4 w-64 rounded-lg z-50 flex flex-col items-center p-4 shadow-lg ${isDarkMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-black'}`}
        >
          {/* close button */}
          <button className="self-end text-xl" onClick={toggleMenu}>
            <FaTimes />
          </button>

          {/* Add search box */}
          <div className="relative mb-2">
            <input
              type="search"
              placeholder="SEARCH..."
              className={`pl-10 pr-2 py-1 rounded-md ${isDarkMode ? 'bg-[#333333] text-white placeholder-white placeholder-opacity-50' : 'bg-[#d7e9e3] text-black placeholder-black placeholder-opacity-50'} focus:outline-none focus:ring-2 focus:ring-teal-300`}
              style={{ width: '150px' }}
            />
            <FaSearch
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-white' : 'text-black'}`}
              size={16}
            />
          </div>

          {/* links */}
          <a href="#link-1" className="text-lg hover:underline py-1">HOME</a>
          <a href="#link-2" className="text-lg hover:underline py-1">ABOUT US</a>
          <a href="#link-3" className="text-lg hover:underline py-1">PROJECTS</a>
          <a href="#link-4" className="text-lg hover:underline py-1">Profile</a>
          <a href="#link-5" className="text-lg hover:underline py-1">Contact Us</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
