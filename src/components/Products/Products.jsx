import React, { useEffect, useState } from "react";
import Navbar from "/src/components/Navbar/Navbar";
import { FaEdit, FaTrashAlt, FaInfoCircle, FaShoppingCart, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaBell, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductHistoryPage = () => {
  const [productHistory, setProductHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedProduct, setExpandedProduct] = useState(null);

  // Fetch product history from backend
  useEffect(() => {
    const fetchProductHistory = async () => {
      setLoading(true);
      const email = localStorage.getItem("userEmail"); // Get email from local storage
      if (!email) {
        console.error("Email not found in local storage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/products/user-products?email=${email}`);
        const data = await response.json();

        if (response.ok) {
          setProductHistory(data); // Set the product data from API response
        } else {
          console.error("Error fetching product data", data.error);
        }
      } catch (error) {
        console.error("Error fetching product data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductHistory();
  }, []);

  // Extract domain name from URL for display purposes
  const extractDomainName = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
    } catch (error) {
      return "Product";
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    // Here you would typically make an API call to delete the product
    // For now, we're just updating the UI
    const updatedHistory = productHistory.filter((product) => product.Product_ID !== id);
    setProductHistory(updatedHistory);
    if (expandedProduct === id) {
      setExpandedProduct(null);
    }
  };

  // Toggle expanded view for a product
  const toggleProductDetails = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <div className="flex flex-grow justify-center items-center">
          <div className="animate-pulse text-center">
            <div className="h-8 w-64 bg-purple-500/30 rounded mx-auto mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800/50 rounded-lg p-8 w-full max-w-md">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-6"></div>
                  <div className="h-24 bg-gray-700 rounded mb-6"></div>
                  <div className="h-10 bg-gray-700 rounded w-full mb-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar /> {/* Navbar stays at the top */}

      {/* Product Price History Heading */}
      <div className="w-full py-8 md:py-12 px-4 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            My Price Trackers
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Keep track of all your price watches and get notified when prices drop below your threshold
          </p>
        </div>
      </div>

      {/* Product History Section */}
      <div className="flex flex-grow justify-center items-start py-6 px-4">
        <div className="max-w-7xl w-full">
          {productHistory.length === 0 ? (
            <div className="text-center p-12 bg-gray-800/30 rounded-lg border border-purple-500/20">
              <p className="text-xl text-gray-400">No products tracked yet</p>
              <Link to="/add-product" className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg">
                Add Your First Product
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {productHistory.map((product, index) => (
                <div
                  key={product.Product_ID}
                  className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur rounded-xl border border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden ${
                    expandedProduct === product.Product_ID ? "col-span-1 md:col-span-2 xl:col-span-3" : ""
                  }`}
                >
                  {/* Card Header - Always visible */}
                  <div className="p-6 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      {/* Left side with product indicator */}
                      <div>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                          Tracker #{index + 1}
                        </span>
                        <h3 className="text-xl font-medium text-white mt-3">
                          {extractDomainName(product.Product_URL)} Product
                        </h3>
                      </div>
                      
                      {/* Right side with action buttons */}
                      <div className="flex gap-2">
                        <Link
                          to={`/product/edit/${product.Product_ID}`}
                          className="p-1.5 rounded-full bg-gray-800/80 text-purple-300 hover:bg-purple-600/30"
                        >
                          <FaEdit size={14} />
                        </Link>
                        <button
                          onClick={() => handleDelete(product.Product_ID)}
                          className="p-1.5 rounded-full bg-gray-800/80 text-red-400 hover:bg-red-600/30"
                        >
                          <FaTrashAlt size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Threshold visualization */}
                    <div className="mt-4 mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Your Price Alert</span>
                        <span className="text-purple-300 font-bold">₹{product.Threshold_Value}</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full" 
                          style={{ width: '70%' }} // This could be dynamic based on current price vs threshold
                        ></div>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        product.NotificationSent 
                          ? "bg-green-500/20 text-green-300" 
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}>
                        {product.NotificationSent ? "Price Drop Alert Sent" : "Monitoring Price"}
                      </span>
                      
                      {/* Expand/Collapse toggle */}
                      <button 
                        onClick={() => toggleProductDetails(product.Product_ID)}
                        className="flex items-center gap-1 text-sm text-purple-300 hover:text-purple-400"
                      >
                        {expandedProduct === product.Product_ID ? (
                          <>Less Details <FaChevronUp size={12} /></>
                        ) : (
                          <>More Details <FaChevronDown size={12} /></>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Main action buttons - Always visible */}
                  <div className="px-6 pb-6 flex flex-col space-y-3">
                    <a
                      href={product.Product_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300"
                    >
                      <FaShoppingCart size={16} />
                      <span>Shop Now</span>
                    </a>
                  </div>

                  {/* Expanded details section */}
                  {expandedProduct === product.Product_ID && (
                    <div className="mt-4 border-t border-purple-500/20 pt-6 px-6 pb-6 bg-gray-900/40">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Information */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-medium text-purple-300 flex items-center gap-2">
                            <FaInfoCircle /> Product Information
                          </h4>
                          
                          {/* URL Display */}
                          <div>
                            <h5 className="text-sm uppercase text-gray-400 mb-2">Product URL</h5>
                            <div className="flex items-center bg-gray-900/50 p-3 rounded-lg border border-gray-700 overflow-x-auto">
                              <a 
                                href={product.Product_URL} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-300 hover:text-purple-400 flex items-center text-sm"
                              >
                                {product.Product_URL}
                                <FaExternalLinkAlt size={12} className="ml-2" />
                              </a>
                            </div>
                          </div>
                          
                          {/* Created At */}
                          <div>
                            <h5 className="text-sm uppercase text-gray-400 mb-2">Added On</h5>
                            <div className="flex items-center gap-2 text-white">
                              <FaCalendarAlt className="text-purple-400" />
                              <span>{new Date(product.Created_At).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Notification Details */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-medium text-purple-300 flex items-center gap-2">
                            <FaBell /> Price Alert Settings
                          </h4>
                          
                          {/* Threshold Value */}
                          <div>
                            <h5 className="text-sm uppercase text-gray-400 mb-2">Price Threshold</h5>
                            <div className="p-4 bg-gray-900/50 rounded-lg border border-purple-500/30">
                              <div className="flex items-baseline">
                                <span className="text-3xl font-bold text-white">₹{product.Threshold_Value}</span>
                                <span className="ml-2 text-gray-400 text-sm">target price</span>
                              </div>
                              <p className="text-sm text-gray-400 mt-2">
                                You'll receive an alert when the product price falls below this value
                              </p>
                            </div>
                          </div>
                          
                          {/* Notification Status */}
                          <div>
                            <h5 className="text-sm uppercase text-gray-400 mb-2">Alert Status</h5>
                            <div className={`p-4 rounded-lg border ${
                              product.NotificationSent 
                                ? "border-green-500/30 bg-green-900/10" 
                                : "border-yellow-500/30 bg-yellow-900/10"
                            }`}>
                              <div className="flex items-center">
                                <div className={`mr-3 w-3 h-3 rounded-full ${
                                  product.NotificationSent 
                                    ? "bg-green-500" 
                                    : "bg-yellow-500"
                                }`}></div>
                                <span className={
                                  product.NotificationSent 
                                    ? "text-green-300" 
                                    : "text-yellow-300"
                                }>
                                  {product.NotificationSent 
                                    ? "Price drop alert has been sent" 
                                    : "Actively monitoring price changes"}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 mt-2">
                                {product.NotificationSent 
                                  ? "You've already been notified about a price drop for this product" 
                                  : "We'll notify you when the price drops below your threshold"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHistoryPage;