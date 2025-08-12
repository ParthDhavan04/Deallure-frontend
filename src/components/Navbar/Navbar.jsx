import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setIsLoggedIn(!!userEmail);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

const DeallureLogo = ({ className = "" }) => (
  <img
    src="/src/assets/Deallure-Logo.png"
    alt="Deallure Logo"
    className={`h-8 md:h-10 w-auto ${className}`}
  />
);

const DeallureSmallLogo = ({ className = "" }) => (
  <img
    src="/src/assets/Deallure-Logo.png"
    alt="Deallure Logo Small"
    className={`h-8 w-auto ${className}`}
  />
);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Different versions for different screen sizes */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              {/* Full logo for medium screens and up */}
              <span className="hidden md:block">
                <DeallureLogo />
              </span>
              {/* Small logo for small screens */}
              <span className="block md:hidden">
                <DeallureSmallLogo />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block flex-grow mx-4">
            <div className="flex justify-center items-center space-x-4 lg:space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-purple-200 hover:text-purple-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-300 flex items-center">
                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-gray-800/90 backdrop-blur-md ring-1 ring-purple-500/20 border border-purple-500/30 z-50"
                    >
                      <div className="py-1">
                        <Link
                          to="/home"
                          className="flex items-center px-4 py-2 text-sm text-purple-200 hover:bg-purple-600/50 hover:text-white transition-colors duration-150 rounded-md mx-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                          </svg>
                          Add Product Info
                        </Link>
                        <Link
                          to="/products"
                          className="flex items-center px-4 py-2 text-sm text-purple-200 hover:bg-purple-600/50 hover:text-white transition-colors duration-150 rounded-md mx-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
                          </svg>
                          Track Your Product
                        </Link>

                        <div className="px-4 py-2 text-xs text-purple-300 border-t border-gray-700/50 mt-1">
                          More features coming soon...
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/subscription" className="text-purple-200 hover:text-purple-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-300">
                Subscriptions
              </Link>

              <Link to="/about" className="text-purple-200 hover:text-purple-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-300">
                About Us
              </Link>
              
              <Link to="/contact" className="text-purple-200 hover:text-purple-400 px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons - Now positioned at extreme right */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-purple-200 hover:text-purple-400 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-colors duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-white hover:bg-purple-600/20 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-purple-200 hover:bg-purple-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                >
                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 py-2 space-y-1"
                    >
                      <Link
                        to="/home"
                        className="flex items-center px-3 py-2 text-sm text-purple-200 hover:bg-purple-600/20 hover:text-white rounded-md"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                        </svg>
                        Track Your Product
                      </Link>
                      <div className="px-3 py-2 text-xs text-purple-400">
                        More features coming soon...
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/pricing" className="text-purple-200 hover:bg-purple-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Subscriptions
              </Link>
              
              <a href="#about-me" className="text-purple-200 hover:bg-purple-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </a>
              
              <Link to="/contact" className="text-purple-200 hover:bg-purple-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
            
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="w-full space-y-2">
                    <Link to="/login" className="w-full block">
                      <button className="w-full text-center border border-purple-500 text-purple-200 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-purple-600/20">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup" className="w-full block">
                      <button className="w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;