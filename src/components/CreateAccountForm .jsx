import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faLock, faGlobe, faCity } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

import backgroundImage from '../picture/Rectangle 11.png';
import logoImage from '../picture/logo.png'; 

function CreateAccountForm() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; 
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = (isDark) => {
    setIsDarkMode(isDark);
  };

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    username: '',
    password: '',
    reenterPassword: '',
    country: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send data to the server
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Left section */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src={backgroundImage} 
          alt="Landscaping background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center relative">
            <div className="absolute w-64 h-64 bg-white opacity-50 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <img src={logoImage} alt="Company Logo" className="w-24 h-24 mx-auto mb-4 relative z-10" />
            <h2 className="text-2xl font-bold mb-2">THE CONSTRUCTION AND</h2>
            <h3 className="text-xl">LANDSCAPING COMPANY</h3>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className={`w-full md:w-1/2 flex items-center justify-center p-8 relative ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="absolute top-0 left-0 w-full h-16" style={{ background: 'linear-gradient(to right, #074143, #0E7E83)', height: '70px' }}></div>

        <div className="w-full max-w-md relative z-10">
          {/* User icon with circular background */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-[#031C1D80] text-4xl" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faPhone} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={formData.username}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="reenterPassword"
                placeholder="RE-ENTER PASSWORD"
                value={formData.reenterPassword}
                onChange={handleInputChange}
                required
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2 relative">
                <FontAwesomeIcon icon={faGlobe} className="absolute top-3 left-3 text-gray-400" />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                >
                  <option value="">COUNTRY</option>
                  <option value="sy">Syria</option>
                  <option value="ir">Iraq</option>
                  <option value="pa">Palestine</option>
                </select>
              </div>
              <div className="w-1/2 relative">
                <FontAwesomeIcon icon={faCity} className="absolute top-3 left-3 text-gray-400" />
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-10 pr-3 py-2 rounded-md border ${isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                >
                  <option value="">CITY</option>
                  <option value="da">Damascus</option>
                  <option value="ba">Baghdad</option>
                  <option value="aq">Alquds</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              CREATE ACCOUNT
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm">HAVE AN ACCOUNT?</span>{" "}
            <Link to="/" className="text-sm text-blue-600 hover:underline">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountForm
