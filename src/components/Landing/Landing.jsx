import React, { useEffect, useState } from "react";
import Navbar from "/src/components/Navbar/Navbar";
import Carousel from "/src/components/Carousel/Carousel";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Handle hash-based scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    handleHashScroll(); // Handle initial page load
    window.addEventListener("hashchange", handleHashScroll);
    
    // Trigger animation effect on hero section
    setIsAnimated(true);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar /> 

      {/* Enhanced Hero Section with Animated Elements */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 pt-16 overflow-hidden">
        <div className={`max-w-5xl mx-auto text-center mt-8 md:mt-16 pt-6 md:pt-10 transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-medium animate-pulse">
            Price Drop Alert Technology
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 leading-tight">
            Never miss a deal again
          </h1>
          
          <p className="text-lg md:text-xl text-purple-200 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Track Product Prices in Real-Time. Our intelligent system monitors price changes 24/7 and notifies you the moment prices drop.
          </p>
          
          {/* Enhanced Call to Action Buttons with Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <Link to="/signup" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
              Get Started Free
            </Link>
            <Link to="/how-it-works" className="px-6 md:px-8 py-3 md:py-4 bg-transparent backdrop-blur-sm border-2 border-purple-500 text-purple-300 font-medium rounded-lg hover:bg-purple-800/20 transition-all duration-300 inline-block">
              How It Works
            </Link>
          </div>
        </div>

        {/* Moved Carousel here */}
        <div className="w-full max-w-5xl mx-auto mb-8 md:mb-12">
          <Carousel />
        </div>

        {/* Features Section with Improved Responsiveness */}
        <div className="w-full max-w-5xl mx-auto relative mb-8 md:mb-12 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"></div>
          <div className="relative bg-gray-800/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/30 shadow-xl overflow-hidden">
            {/* Animated Wave Background */}
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
            
            {/* Features Column */}
            <div className="relative z-10">
              <h4 className="text-xl md:text-2xl font-bold text-purple-200 mb-4 md:mb-6 text-center md:text-left">How Deallure Works</h4>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">24/7 Price Monitoring</h5>
                    <p className="text-gray-300 text-sm md:text-base">Our system checks prices multiple times daily across all major retailers, ensuring you never miss a price drop.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">Customizable Tracking Period</h5>
                    <p className="text-gray-300 text-sm md:text-base">Set how long you want us to track each product, from days to months. Perfect for timing your purchases.</p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  <div className="mb-2 md:mb-0 md:mr-4 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-lg md:text-xl mb-1 md:mb-2">Instant Email Alerts</h5>
                    <p className="text-gray-300 text-sm md:text-base">Get notified immediately when prices drop below your target, so you can act quickly on the best deals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Better Spacing */}
      <div className="w-full py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gray-800/50 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/20 text-center transform transition-all duration-300 hover:translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">4</div>
            <div className="text-gray-300 text-sm md:text-base">Active Users</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/20 text-center transform transition-all duration-300 hover:translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">$0</div>
            <div className="text-gray-300 text-sm md:text-base">Customer Savings</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/20 text-center transform transition-all duration-300 hover:translate-y-1 sm:col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">0</div>
            <div className="text-gray-300 text-sm md:text-base">Products Tracked</div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Improved Mobile Layout */}
      <div id="testimonials" className="w-full py-10 md:py-16 px-4 bg-gray-900/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/40 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/30 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg md:text-xl">SRS</div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-medium text-purple-300 text-sm md:text-base">Sairanjan Subudhi</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Happy Customer</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm md:text-base">
                "Deallure has saved me over $450 on my merch purchases this year alone. The price drop alerts are instant and the interface is super intuitive!"
              </p>
              <div className="mt-3 md:mt-4 flex text-yellow-400 text-sm md:text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800/40 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/30 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg md:text-xl">AS</div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-medium text-purple-300 text-sm md:text-base">Anshika Srivastava</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Smart Shopper</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm md:text-base">
                "I've tried several price trackers before, but Deallure is on another level. Their historical price charts helped me time my purchases perfectly."
              </p>
              <div className="mt-3 md:mt-4 flex text-yellow-400 text-sm md:text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-800/40 backdrop-blur p-4 md:p-6 rounded-lg border border-purple-500/30 shadow-lg transform transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg md:text-xl">RA</div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-medium text-purple-300 text-sm md:text-base">Rushil Alagh</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Small Businessman</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm md:text-base">
                "As a small business owner, Deallure helps me stay competitive by monitoring competitor pricing. It's an essential tool in my business arsenal!"
              </p>
              <div className="mt-3 md:mt-4 flex text-yellow-400 text-sm md:text-base">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
          
          {/* Testimonial CTA */}
          <div className="mt-8 md:mt-12 text-center">
            <Link to="/success-stories" className="px-5 py-2.5 md:px-6 md:py-3 bg-purple-600/40 hover:bg-purple-600/60 border border-purple-400 text-white text-sm md:text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Read More Success Stories
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section with Enhanced Styling */}
      <div 
        id="about-me" 
        className="w-full py-10 md:py-16 px-4 relative"
      >
        <div className="absolute inset-0 bg-purple-900/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">About Us</h2>
          <p className="text-lg md:text-xl text-center text-purple-100 mb-6 md:mb-8 leading-relaxed px-2">
            Welcome to <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Deallure</span>! We are committed to helping you track product prices effortlessly. 
            Our platform ensures you never miss out on a great deal.
          </p>
          <div className="flex justify-center">
            <Link to="/our-mission" className="px-5 py-2.5 md:px-6 md:py-3 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500 text-purple-200 text-sm md:text-base font-medium rounded-lg transition-all duration-300 inline-block">
              Learn More About Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Added Newsletter Section */}
      <div className="w-full py-8 md:py-12 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 md:p-8 border border-purple-500/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center text-purple-200">Stay Updated on the Latest Deals</h3>
            <p className="text-center text-purple-300 mb-5 text-sm md:text-base">Subscribe to our newsletter for exclusive tips and best price drop alerts.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-lg bg-gray-800/70 border border-purple-500/30 text-white placeholder-purple-300/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer with Social Links */}
      <footer className="w-full py-6 md:py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-sm text-purple-300">
            <Link to="/" className="hover:text-purple-100 transition-colors">Home</Link>
            <a href="#about-me" className="hover:text-purple-100 transition-colors">About</a>
            <Link to="/features" className="hover:text-purple-100 transition-colors">Features</Link>
            <a href="#testimonials" className="hover:text-purple-100 transition-colors">Testimonials</a>
            <Link to="/privacy" className="hover:text-purple-100 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-purple-100 transition-colors">Terms of Service</Link>
          </div>
          
          <p className="text-center text-purple-300 text-xs md:text-sm">
            © 2025 Deallure. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;