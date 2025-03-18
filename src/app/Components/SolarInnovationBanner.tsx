"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SolarInnovationBanner = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full container mx-auto bg-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-blue-500 clip-path-diagonal"></div>

      <div className="container mx-auto pl-8 px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="lg:w-1/2 text-left space-y-8 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Innovate with Khushali Solar Panels
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At Khushali Solar Energy, we bring you the future of energy with our cutting-edge solar panels. Designed for sustainability and efficiency, our panels are perfect for any space.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 0l9 4-9 4-9-4 9-4z"></path>
                </svg>
              </div>
              <p className="text-xl text-white font-semibold">
                Sustainable Energy with Cutting-Edge Design
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m-9-9h18"></path>
                </svg>
              </div>
              <p className="text-xl text-white font-semibold">
                Unleash the Power of the Sun with Sleek Solar Panels
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
              <p className="text-xl text-white font-semibold">
                Elevate Your Space, Harness the Future
              </p>
            </div>
          </div>

          <button className="mt-6 px-8 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            Discover More
          </button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <div className="relative w-full max-w-lg">
            <Image
              src="/service12.png" 
              alt="Khushali Solar Panels"
              width={600}
              height={500}
              className="object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarInnovationBanner;
