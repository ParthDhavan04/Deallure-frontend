import React, { useEffect, useState } from "react";
import Navbar from "/src/components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons for edit and delete

const ProductHistoryPage = () => {
  const [productHistory, setProductHistory] = useState([]);

  // Fetch or generate product history data
  useEffect(() => {
    const fetchProductHistory = () => {
      // Example product data
      const historyData = [
        {
          id: 1,
          name: "Product 1",
        },
        {
          id: 2,
          name: "Product 2",
        },
        {
          id: 3,
          name: "Product 3",
        },
        // Add more products as needed
      ];
      setProductHistory(historyData);
    };

    fetchProductHistory();
  }, []);

  // Handle product deletion
  const handleDelete = (id) => {
    const updatedHistory = productHistory.filter((product) => product.id !== id);
    setProductHistory(updatedHistory);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar /> {/* ✅ Navbar stays at the top */}

      {/* Product Price History Heading - Under Navbar */}
      <div className="w-full py-8 md:py-12 px-4 mt-8"> {/* Added mt-8 for margin-top */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Product Price History
          </h2>
        </div>
      </div>

      {/* Product History Section - Centered Cards */}
      <div className="flex flex-grow justify-center items-center py-12"> 
        <div className="max-w-7xl w-full px-4">
          {/* Product History Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center">
            {productHistory.map((product) => (
              <div
                key={product.id}
                className="relative bg-gray-800/50 backdrop-blur p-12 rounded-lg border border-purple-500/20 text-center transform transition-all duration-300 hover:translate-y-1 max-w-md mx-auto"
                style={{ minHeight: "350px" }} // Added minHeight to make the card taller
              >
                {/* Edit and Delete Icons in Top-right Corner */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <Link
                    to={`/product/edit/${product.id}`}
                    className="text-purple-300 hover:text-purple-500"
                  >
                    <FaEdit size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>

                <h3 className="text-xl font-medium text-purple-300">{product.name}</h3>

                {/* Action Buttons at the bottom */}
                <div className="mt-6 flex justify-between gap-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    View Details
                  </Link>
                  <button
                    className="px-6 py-3 bg-transparent backdrop-blur-sm border-2 border-purple-500 text-purple-300 font-medium rounded-lg hover:bg-purple-800/20 transition-all duration-300 w-full sm:w-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHistoryPage;
