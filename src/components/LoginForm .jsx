import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; 


import backgroundImage1 from '../picture/Rectangle 1.png';
import backgroundImage2 from '../picture/Rectangle 2 (2).png';
import backgroundImage3 from '../picture/Rectangle 3.png';
import backgroundImage4 from '../picture/Rectangle 4.png';

import logoImage from '../picture/logo.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);

  // Use useNavigate for routing

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
    
    // Verify login (here you can perform data verification)

    // Direct to the LandingPage after logging in
    navigate('/landingpage');
  };

// To change the background every 5 seconds
useEffect(() => {
    const backgrounds = [
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
      backgroundImage4,
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % backgrounds.length;
      setCurrentBackground(backgrounds[index]);
    }, 5000); 

    return () => clearInterval(interval); // Clean up the timer when the component is cancelled
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
     
      <div
        className="absolute top-0 left-0 w-full h-16"
        style={{
          background: 'linear-gradient(to right, #074143, #0E7E83)',
          height: '70px',
        }}
      ></div>
      <div className="flex flex-1">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <img src={logoImage} alt="Company Logo" className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-2">WELCOME</h1>
              <p className="text-xl text-gray-600">REINVENT YOUR SPACE WITH US</p>
            </div>
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
              <div className="flex justify-between text-sm">
                <Link to="/signup" className="text-blue-600 hover:underline">DON'T HAVE AN ACCOUNT? SIGN UP</Link>
                <Link to="/change-password" className="text-blue-600 hover:underline">
                  FORGOT PASSWORD?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>

        
        <div className="hidden md:block md:w-1/2">
          <img
            src={currentBackground}
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
