import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../picture/Rectangle 11.png';
import logoImage from '../picture/logo.png'; 
 function Changepassword() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reenterPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password change requested for:', formData.email);
    // Here you would typically send the request to your backend
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src={backgroundImage} 
          alt="House with landscaping"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="flex items-center justify-center mb-4">
              {/*Add a transparent circle around the logo*/}
              <div className="bg-white bg-opacity-30 rounded-full p-4 flex items-center justify-center">
                <img src={logoImage} alt="Company Logo" className="w-24 h-24" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">THE CONSTRUCTION AND</h2>
            <h3 className="text-xl">LANDSCAPING COMPANY</h3>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">CHANGE PASSWORD</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              WE WILL SEND YOU A 6-DIGIT CODE TO VERIFY YOUR ACCOUNT
            </p>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              SEND CODE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Changepassword ;