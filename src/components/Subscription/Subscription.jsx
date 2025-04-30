import React, { useState, useEffect } from "react"; 
import Navbar from "/src/components/Navbar/Navbar";
import { Link } from "react-router-dom";


const Subscription = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      {/* Subscription Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 pt-16 overflow-hidden">
        <div className={`max-w-5xl mx-auto text-center mt-8 md:mt-16 pt-6 md:pt-10 transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-medium animate-pulse">
            Exclusive Subscription Offer
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 leading-tight">
            Get Premium Access Today
          </h1>

          <p className="text-lg md:text-xl text-purple-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Unlock exclusive features and real-time price drop notifications. Stay ahead of the market with our premium service.
          </p>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <Link to="/checkout" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
              Subscribe Now
            </Link>
            <Link to="/features" className="px-6 md:px-8 py-3 md:py-4 bg-transparent backdrop-blur-sm border-2 border-purple-500 text-purple-300 font-medium rounded-lg hover:bg-purple-800/20 transition-all duration-300 inline-block">
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-5xl mx-auto relative mb-8 md:mb-12 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"></div>
          <div className="relative bg-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/30 shadow-xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 400" preserveAspectRatio="none" className="absolute w-full h-full">
                <path d="M 0 80 Q 200 120 400 80 Q 600 40 800 80 L 800 400 L 0 400 Z" fill="url(#wave-gradient)" className="animate-slow-pulse">
                  <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                    M 0 80 Q 200 120 400 80 Q 600 40 800 80 L 800 400 L 0 400 Z;
                    M 0 70 Q 200 100 400 90 Q 600 80 800 70 L 800 400 L 0 400 Z;
                    M 0 80 Q 200 120 400 80 Q 600 40 800 80 L 800 400 L 0 400 Z"
                  />
                </path>
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <h4 className="text-xl md:text-2xl font-bold text-purple-200 mb-4 md:mb-6 text-center md:text-left">Why Go Premium?</h4>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">Exclusive Deals</h5>
                    <p className="text-gray-300 text-sm md:text-base">Get access to limited-time offers and flash sales available only to premium members.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">Priority Alerts</h5>
                    <p className="text-gray-300 text-sm md:text-base">Receive notifications first when prices drop, so you can make faster decisions on purchases.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">Customizable Tracking</h5>
                    <p className="text-gray-300 text-sm md:text-base">Set your own tracking periods and get updates based on your preferences.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action for Subscription */}
      <div className="w-full py-8 md:py-12 px-4 text-center">
        <Link to="/checkout" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
          Subscribe and Save Big
        </Link>
      </div>
    </div>
  );
};

export default Subscription;
