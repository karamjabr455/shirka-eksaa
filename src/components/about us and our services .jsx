import React from 'react';

export default function AboutUsSection() {
  return (
    <section className="bg-white">
      <div className="bg-teal-200 py-4">
      <h2 className="text-3xl font-bold text-left text-gray-800 ml-4" id='ABOUT'>ABOUT US AND OUR SERVICES</h2>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="font-bold mb-2">WELCOME TO Z AND N CONSTRUCTION AND LANDSCAPING,</h3>
              <p className="text-sm">
                WHERE QUALITY MEETS CREATIVITY. FOUNDED WITH A PASSION FOR TRANSFORMING OUTDOOR SPACES AND BUILDING LASTING STRUCTURES, WE ARE DEDICATED TO PROVIDING EXCEPTIONAL SERVICES THAT ENHANCE BOTH THE BEAUTY AND FUNCTIONALITY OF YOUR PROPERTY.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">OUR MISSION</h3>
              <p className="text-sm">
                AT Z AND N, OUR MISSION IS TO DELIVER HIGH-QUALITY CONSTRUCTION AND LANDSCAPING SOLUTIONS TAILORED TO MEET THE UNIQUE NEEDS OF OUR CLIENTS. WE BELIEVE IN CREATING SPACES THAT REFLECT YOUR VISION WHILE ENSURING DURABILITY AND SUSTAINABILITY.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">OUR TEAM</h3>
              <p className="text-sm">
                OUR EXPERIENCED TEAM OF PROFESSIONALS BRINGS A WEALTH OF KNOWLEDGE AND EXPERTISE TO EVERY PROJECT. FROM SKILLED LANDSCAPERS TO EXPERT BUILDERS, WE WORK COLLABORATIVELY TO ENSURE THAT EACH JOB IS COMPLETED TO THE HIGHEST STANDARDS. WE PRIDE OURSELVES ON OUR ATTENTION TO DETAIL, COMMITMENT TO EXCELLENCE, AND PASSION FOR OUR CRAFT.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">WHAT WE OFFER</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  CONSTRUCTION SERVICES: FROM RESIDENTIAL PROJECTS TO COMMERCIAL BUILDS, WE HANDLE EVERYTHING FROM DESIGN TO EXECUTION, ENSURING A SEAMLESS CONSTRUCTION PROCESS.
                </li>
                <li>
                  LANDSCAPING SERVICES: OUR LANDSCAPING TEAM SPECIALIZES IN CREATING BEAUTIFUL GARDENS, PATIOS, AND OUTDOOR LIVING SPACES THAT ENHANCE YOUR PROPERTY'S APPEAL.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
            <div className="relative">
             {/* Import video */}

              <video
                src={require('../picture/Grey Minimalist Home Decor Video.mp4')} 
                controls
              
                autoPlay 
                loop 
                muted 
                className="w-full h-60 object-cover" 
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h3 className="font-bold mb-2">WHY CHOOSE US?</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  QUALITY CRAFTSMANSHIP: WE USE ONLY THE BEST MATERIALS AND TECHNIQUES TO ENSURE LASTING RESULTS.
                </li>
                <li>
                  CUSTOMER-CENTRIC APPROACH: YOUR SATISFACTION IS OUR PRIORITY. WE LISTEN TO YOUR NEEDS AND WORK CLOSELY WITH YOU THROUGHOUT THE PROJECT.
                </li>
                <li>
                  SUSTAINABLE PRACTICES: WE ARE COMMITTED TO ENVIRONMENTALLY FRIENDLY PRACTICES THAT BENEFIT BOTH OUR CLIENTS AND THE PLANET.
                </li>
              </ul>
            </div>
            <p className="text-sm">
              JOIN US IN CREATING BEAUTIFUL, FUNCTIONAL SPACES THAT YOU CAN CHERISH FOR YEARS TO COME. AT Z AND N CONSTRUCTION AND LANDSCAPING, WE TURN YOUR DREAMS INTO REALITY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
