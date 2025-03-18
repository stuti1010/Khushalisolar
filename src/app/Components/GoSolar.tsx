"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBolt, FaSolarPanel, FaMoneyBillWave, FaHandHoldingUsd, FaLeaf } from "react-icons/fa";

export default function GoSolar() {
 
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i:number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-7 justify-center p-4 sm:p-6 lg:p-12 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 max-w-lg mb-8 md:mb-0 md:pr-12 relative z-10"
      >
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden shadow-2xl group">
          <Image
            src="/number.jpg" 
            alt="Solar Energy"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
        </div>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center md:text-left relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-tight">
          5 Reasons to{" "}
          <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-lg shadow-md">GO SOLAR</span>
        </h2>
        <div className="mt-6 space-y-6 sm:space-y-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex items-center space-x-4 sm:space-x-6 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl sm:text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <FaBolt />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Lower Electricity Bills
            </span>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex items-center space-x-4 sm:space-x-6 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl sm:text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <FaSolarPanel />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Energy Independence
            </span>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex items-center space-x-4 sm:space-x-6 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl sm:text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <FaMoneyBillWave />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Secure Investment
            </span>
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex items-center space-x-4 sm:space-x-6 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl sm:text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <FaHandHoldingUsd />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Tax Benefits & Incentives
            </span>
          </motion.div>
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex items-center space-x-4 sm:space-x-6 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl sm:text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
              <FaLeaf />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Reduces Air Pollution
            </span>
          </motion.div>
        </div>
      </motion.div>

       
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none z-0"></div>
    </div>
  );
}