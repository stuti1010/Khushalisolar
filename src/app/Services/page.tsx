"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ServiceShowcase from '../Components/ServiceCards';
import HowItWorks from '../Components/HowItWorks';
import ServiceSection from '../Components/InnovationandTesting';
import SolarInnovationBanner from '../Components/SolarInnovationBanner';

const ServiceBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative w-full min-h-[400px]  overflow-hidden">
         <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          poster="/image1.jpg" 
        >
          <source src="/service.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-40"></div>
        <div className="container mx-auto px-4 py-16 pt-36 flex flex-col lg:flex-row items-center justify-between">
          <div className="relative pl-10 lg:w-1/2 text-left space-y-6 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Welcome to Khushali Solar Energy Services
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-semibold leading-relaxed">
              Harness the power of the sun with Khushali Solar Energy! We provide
              innovative and sustainable solar solutions tailored to your needs.
              From residential installations to large-scale solar projects, our
              expert team ensures maximum efficiency and eco-friendly energy
              production. Join us in building a greener future!
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Explore Our Services
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute w-full h-full">
              <motion.div
                className="absolute top-10 left-0 md:w-48 md:h-28 w-28 h-16"
                animate={{ x: ["0%", "100%"] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
              >
                <Image src="/cloud1.png" alt="Cloud 1" width={200} height={200} />
              </motion.div>
              <motion.div
                className="absolute top-24 right-0 md:w-48 md:h-28 w-28 h-16"
                animate={{ x: ["0%", "-100%"] }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                style={{ zIndex: 10 }}
              >
                <Image src="/cloud1.png" alt="Cloud 2" width={200} height={200} />
              </motion.div>
            </div>
            <div className="w-full max-w-md relative z-0">
              <Image
                src="/service121.png"
                alt="Solar Panels"
                width={600}
                height={400}
                className="object-cover md:max-w-[550px] max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ServiceShowcase />
      <ServiceSection />
      <SolarInnovationBanner/>
      <HowItWorks />
    </div>
  );
};

export default ServiceBanner;