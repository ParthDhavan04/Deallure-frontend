import React from "react";
import Navbar from "/src/components/Navbar/Navbar";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const team = [
    "Anshika Srivastava",
    "Parth Dhavan",
    "Rushil Alagh",
    "Sairanjan Subudhi",
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12 lg:px-24 lg:py-20">
      {/* Add Navbar here */}
      <Navbar />
    <div className="bg-gray-950 text-white min-h-screen px-6 py-12 lg:px-24 lg:py-20">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold text-center text-purple-300 mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        About Deallure
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Our Mission",
            content:
              "At Deallure, we believe smart shopping should be effortless. Our mission is to help online shoppers make confident and timely purchasing decisions — without the hassle of constantly checking prices.",
          },
          {
            title: "Why We Built Deallure",
            content:
              "Every day, countless users miss out on great deals simply because prices fluctuate frequently and inconsistently across platforms. Tired of manually tracking prices and experiencing post-purchase regret, we created Deallure — a smarter way to shop.",
          },
          {
            title: "What We Do",
            content: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor product prices across multiple e-commerce sites</li>
                <li>Let you set custom price drop alerts</li>
                <li>Show historical price trends</li>
                <li>Send instant notifications when deals match your preferences</li>
              </ul>
            ),
          },
          {
            title: "Our Promise",
            content:
              "We’re committed to transparency, simplicity, and saving your time and money. Whether you're a casual shopper or a savvy deal-hunter, Deallure is built to serve you.",
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-purple-300">
              {section.title}
            </h2>
            <div className="text-sm leading-relaxed text-gray-200">{section.content}</div>
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <motion.blockquote
        className="italic text-xl font-semibold text-center mt-16 text-purple-200"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>“We built Deallure because we were tired of missing the best deals — and we knew we weren't alone.”</p>
      </motion.blockquote>

      {/* Tagline Section */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-400">
          🛍️ "Your Price, Our Priority."
        </h2>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-purple-200 mb-4 text-center">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((name, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 text-center rounded-xl py-6 px-4 shadow-md hover:shadow-purple-500/30 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-lg font-medium text-purple-200">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default About;
