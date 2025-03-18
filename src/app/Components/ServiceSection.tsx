"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaBolt, FaTools } from "react-icons/fa"; 
const ServicesSection = () => {
  
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
        }),
      };

  return (
    <div className="md:block hidden">
    <div className="relative w-full flex justify-center pb-12 px-4 sm:px-6 lg:px-8 ">
      
      <div className="absolute -top-24 sm:-top-28 lg:-top-32 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full max-w-7xl flex-wrap">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xs sm:w-64 lg:w-72 text-center border border-gray-100 hover:shadow-2xl hover:border-blue-500  transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-200"></div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
            <FaSolarPanel className="text-blue-500 text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Solar Panel Installation
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-tight">
            Expert installation for maximum efficiency.
          </p>
          <button className="mt-4 px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        </motion.div>

       
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xs sm:w-64 lg:w-72 text-center border border-gray-100 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-200"></div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
            <FaBolt className="text-blue-500 text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Energy Optimization
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-tight">
            Boost your energy savings with smart solutions.
          </p>
          <button className="mt-4 px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xs sm:w-64 lg:w-72 text-center border border-gray-100 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-200"></div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
            <FaTools className="text-blue-500 text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Maintenance & Repairs
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2 leading-tight">
            Keep your panels performing at their best.
          </p>
          <button className="mt-4 px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;