import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "/src/components/Navbar/Navbar";

const Home = () => {
  const [productLink, setProductLink] = useState("");
  const [priceThreshold, setPriceThreshold] = useState("");
  const [timeoutPeriod, setTimeoutPeriod] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const userEmail = localStorage.getItem("userEmail");
  
    if (!userEmail) {
      setError("User not logged in. Please log in first.");
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/products/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          productURL: productLink,
          threshold: priceThreshold,
          timeout: timeoutPeriod,      
        }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to store product tracking details");
      }
  
      setMessage("Product tracking activated successfully!");
      
      // Reset input fields
      setProductLink("");
      setPriceThreshold("");
      setTimeoutPeriod("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear error or success message when user starts typing
  const clearMessages = () => {
    if (error) setError("");
    if (message) setMessage("");
  };

  // Floating price tags animation - adaptive to screen size
  const PriceTag = ({ delay, duration, x, y, scale, rotate }) => (
    <motion.div
      className="absolute text-purple-300/20 text-4xl font-bold"
      initial={{ opacity: 0, x, y, rotate, scale }}
      animate={{ 
        opacity: [0, 0.7, 0],
        y: y - 100,
        rotate: rotate + 10,
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 5
      }}
    >
      $
    </motion.div>
  );
  
  // Adjust number of background elements based on screen size
  const bgElementCount = windowDimensions.width < 768 ? 8 : 15;
  
  // Number of price tags based on screen size
  const priceTagCount = windowDimensions.width < 768 ? 5 : 10;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {/* Animated background elements - responsive quantity */}
          {[...Array(bgElementCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500"
              initial={{
                width: Math.random() * (windowDimensions.width < 768 ? 100 : 200) + 50,
                height: Math.random() * (windowDimensions.width < 768 ? 100 : 200) + 50,
                x: Math.random() * windowDimensions.width,
                y: Math.random() * windowDimensions.height,
                opacity: 0.1,
              }}
              animate={{
                x: [
                  Math.random() * windowDimensions.width,
                  Math.random() * windowDimensions.width,
                ],
                y: [
                  Math.random() * windowDimensions.height,
                  Math.random() * windowDimensions.height,
                ],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 60 + 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating price tags - responsive quantity */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(priceTagCount)].map((_, i) => (
          <PriceTag 
            key={i}
            delay={Math.random() * 5}
            duration={Math.random() * 5 + 10}
            x={Math.random() * windowDimensions.width}
            y={Math.random() * windowDimensions.height + 300}
            scale={Math.random() * 0.5 + 0.7}
            rotate={Math.random() * 40 - 20}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12 flex flex-col items-center justify-center min-h-[80vh]">
          {/* Hero Section - More responsive spacing */}
          <motion.div
            className="text-center mb-8 md:mb-12 mt-4 md:mt-8 px-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Price Drop Alerts
              </h1>
              <motion.div 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-purple-600 text-white text-xs px-2 py-1 rounded-full transform rotate-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 10, 
                  delay: 0.9 
                }}
              >
                NEW
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-base md:text-xl text-purple-200 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Get notified when products drop to your target price
            </motion.p>
          </motion.div>

          {/* Form Card - Full width on mobile */}
          <motion.div
            className="w-full max-w-xl backdrop-blur-md bg-gray-900/60 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Card Header with simplified look */}
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">Price Tracker</h2>
              <p className="text-purple-200 text-sm">Never miss a price drop again</p>
            </div>

            {/* Toast Messages - Fixed at the top inside form area */}
            {(error || message) && (
              <motion.div 
                className={`m-4 p-4 rounded-lg ${error ? 'bg-red-500/20 text-red-100' : 'bg-green-500/20 text-green-100'} flex items-center justify-between`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm">{error || message}</span>
                <button 
                  onClick={() => error ? setError("") : setMessage("")}
                  className="ml-2 text-white/70 hover:text-white"
                >
                  ×
                </button>
              </motion.div>
            )}

            {/* Form - responsive padding */}
            <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-5 md:space-y-6" onChange={clearMessages}>
              {/* Product Link - Simplified */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-purple-300">Product URL</label>
                <input
                  type="url"
                  required
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder="Enter product URL"
                  className="w-full p-3 rounded-lg bg-gray-800/80 border border-purple-500/30 text-white placeholder-purple-400/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <p className="text-xs text-purple-400">Works with Amazon, eBay, Walmart, and more</p>
              </div>

              {/* Form Grid for Price and Timeout - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Price Threshold - Simplified */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-purple-300">Target Price</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={priceThreshold}
                    onChange={(e) => setPriceThreshold(e.target.value)}
                    placeholder="99.99"
                    className="w-full p-3 rounded-lg bg-gray-800/80 border border-purple-500/30 text-white placeholder-purple-400/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                  <p className="text-xs text-purple-400">We'll notify you below this price</p>
                </div>

                {/* Timeout Period - Simplified */}
                <div className="space-y-2">
                  <label className="block text-base font-medium text-purple-300">Duration (Months)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="12"
                    value={timeoutPeriod}
                    onChange={(e) => setTimeoutPeriod(e.target.value)}
                    placeholder="3"
                    className="w-full p-3 rounded-lg bg-gray-800/80 border border-purple-500/30 text-white placeholder-purple-400/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  />
                  <p className="text-xs text-purple-400">Track for up to 12 months</p>
                </div>
              </div>

              {/* Submit Button - Simplified but still attractive */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 mr-3 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  "Start Price Tracking"
                )}
              </motion.button>
            </form>

            {/* How It Works - Footer - Simplified */}
            <div className="bg-gray-800/40 p-4 border-t border-purple-700/30">
              <p className="text-sm text-purple-300">
                We'll check prices daily and email you when the price drops below your target.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards - Stack on mobile, adjust spacing */}
          <motion.div 
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Feature 1 - Simplified */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Instant Alerts</h3>
              <p className="text-sm text-purple-200">Get notifications instantly via email when prices drop below your target threshold.</p>
            </div>

            {/* Feature 2 - Simplified */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Save Money</h3>
              <p className="text-sm text-purple-200">Never pay full price again. Our users save an average of 15% on their tracked purchases.</p>
            </div>
          </motion.div>

          {/* Interactive Counter - responsive layout */}
          <motion.div
            className="mt-12 md:mt-16 bg-gray-800/40 backdrop-blur-sm px-6 py-5 rounded-xl border border-purple-500/20 flex flex-col sm:flex-row items-center justify-around gap-6 mx-2 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-purple-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                5,280+
              </motion.div>
              <div className="text-sm text-purple-400">Active Trackers</div>
            </div>
            
            <div className="w-full sm:w-px h-px sm:h-12 bg-purple-700/30"></div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-purple-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
              >
                $342K
              </motion.div>
              <div className="text-sm text-purple-400">Saved by Users</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;