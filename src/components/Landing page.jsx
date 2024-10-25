import React, { useState, useEffect } from 'react';
import Navbar from './NavBar'; 
import FullWidthImage from './FullWidthImage'; 
import InteriorCladding from './InteriorCladding'; 
import LandscapingDepartment from './LandscapingDepartment'; 
import AboutUsSection from './about us and our services '; 
import BusinessExhibition from './BusinessExhibition'; 
import Footer from './footer'; 

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; 
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

 
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
      <FullWidthImage isDarkMode={isDarkMode} />
      <InteriorCladding isDarkMode={isDarkMode} />
      <LandscapingDepartment isDarkMode={isDarkMode} />
      <AboutUsSection isDarkMode={isDarkMode} />
      <BusinessExhibition isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingPage;
