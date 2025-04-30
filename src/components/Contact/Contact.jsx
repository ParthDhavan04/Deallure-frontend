import React from "react";
import Navbar from "/src/components/Navbar/Navbar";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      <main className="flex-grow px-4 pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Have a question or want to reach out? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info and Form Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 bg-gray-800/50 p-6 md:p-10 rounded-xl border border-purple-500/20 shadow-lg backdrop-blur-sm">

          {/* Team Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-purple-300">Contact Details</h2>
            <div>
              <h4 className="text-lg font-medium text-purple-200">Team Deallure</h4>
              <p className="text-gray-300">University of Petroleum and Energy Studies, Dehradun</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-200">Email</h4>
              <p className="text-gray-300">deallure2025@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-200">Phone</h4>
              <p className="text-gray-300">+91 7217202698</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-200">Follow us</h4>
              <div className="flex gap-4 mt-2 text-purple-400">
                <a href="#" className="hover:text-pink-400 transition">Twitter</a>
                <a href="#" className="hover:text-pink-400 transition">Instagram</a>
                <a href="#" className="hover:text-pink-400 transition">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-purple-200">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-200">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
