"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
    <section className="relative min-h-screen w-full flex items-center justify-center  sm:p-6 lg:p-20 overflow-hidden">
   
      <div className="absolute inset-0 z-0">
        <Image
          src="/home1.jpg" 
          alt="Solar Background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 opacity-60"></div>
      </div>

     
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center py-12 lg:py-0">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 py-8 lg:py-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Empower Your Future <br /> with{" "}
            <span className="text-blue-200">Solar Energy</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
            Harness clean energy, slash electricity bills, and embrace a sustainable lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Get Free Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Explore More
            </motion.a>
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 px-4 sm:px-6 mb-8 lg:mb-0"
        >
          <div className="relative max-w-md mx-auto lg:max-w-full">
            <Image
              src="/home1.jpg" 
              alt="Solar Panels"
              width={500}
              height={500}
              className="w-full rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          
            
          </div>
        </motion.div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white opacity-90 [clip-path:polygon(0_100%,100%_0%,100%_100%,0%_100%)]"></div>
    </section>
    </div>
  );
};

export default HeroSection;