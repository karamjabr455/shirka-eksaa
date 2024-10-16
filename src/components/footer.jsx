import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import logoImage from '../picture/logo.png'; 

export default function Footer() {
  return (
    <div className="font-sans">
      {/* Contact header */}
      <div className="bg-[#7ebcbb] text-[#121C17] p-4 flex flex-wrap justify-between items-center">
        <h2 className="text-2xl font-bold" id="footer">CONTACT US</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={20} />
            <span>1234 GREENWAY DRIVE SPRINGFIELD, IL 62701</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={20} />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={20} />
            <a href="mailto:INFO@ZANDNCONSTRUCTION.COM" className="underline">
              INFO@ZANDNCONSTRUCTION.COM
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className=" text-white p-8" style={{
          backgroundImage: 'linear-gradient(to right, #074143, #031C1D)', 
        }}>
        <div className="container mx-auto flex flex-wrap justify-between">
         {/* Logo and company name */}
         <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-4">
              {/* Logo*/}
              <img src={logoImage} alt="Company Logo" className="w-16 h-16" /> 
              <div>
                <h1 className="text-xl font-bold">THE CONSTRUCTION AND</h1>
                <h2 className="text-xl font-bold">LANDSCAPING COMPANY</h2>
              </div>
            </div>
          </div>


          {/* Business hours */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">BUSINESS HOURS:</h3>
            <p>MONDAY - FRIDAY: 8 AM - 6 PM</p>
            <p>SATURDAY: 9 AM - 4 PM</p>
            <p>SUNDAY: CLOSED</p>
          </div>

          {/* Quick links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">QUICK LINKS:</h3>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>

          {/* Awards and certifications */}
          <div>
            <h3 className="text-lg font-bold mb-2">AWARDS AND CERTIFICATIONS:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                "PROUD MEMBER OF THE NATIONAL ASSOCIATION OF LANDSCAPE PROFESSIONALS"
              </li>
              <li>"CERTIFIED GREEN BUILDER"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" text-white p-4 flex justify-between items-center"style={{
          backgroundImage: 'linear-gradient(to right, #074143, #031C1D)', 
        }}>
        <div className="flex gap-4">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
        </div>
        <p className="text-sm">
          © 2024 Z AND N CONSTRUCTION AND LANDSCAPING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
