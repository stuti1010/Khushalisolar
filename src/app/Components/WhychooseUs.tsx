"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaHeadset, FaVideo } from "react-icons/fa";

const WhyChooseUs = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.play(); 
        setIsPlaying(true);
      }
    };

  return (
    <section className="md:pt-32 py-4 ">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
    
        <div className="lg:w-1/3 lg:h-[550px] bg-blue-500/20 py-6 px-3 rounded-3xl  flex flex-col gap-2">
         
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <video
              ref={videoRef}
              src="video1.mp4"
              className="w-full h-[250px]"
              controls={isPlaying}
              autoPlay loop  
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button
                  className="bg-white p-4 rounded-full text-gray-800 shadow-md text-lg font-bold"
                  onClick={handlePlayVideo}
                >
                  <FaVideo />
                </button>
              </div>
            )}
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/why.jpg"
              alt="Tools"
              width={500}
              height={350}
              className="w-full h-[350px]"
            />
          </motion.div>
        </div>

        {/* Middle part*/}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-1/3 lg:h-[550px] bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-gray-100 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, urna eu tincidunt elementum, nisi nunc feugiat justo, ut faucibus felis elit ut metus.
          </p>
          <p className="text-gray-100 mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="relative px-8 py-3 font-semibold text-blue-500 bg-white border-2 border-blue-500 hover:border-white rounded-md shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg overflow-hidden group">
  <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  <span className="relative z-10">Learn More</span>
</button>

        </motion.div>

       {/* Right Side Part - Why Choose Us */}
       <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="lg:w-1/3 lg:h-[550px] bg-white p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-500 border-2 border-transparent hover:border-blue-500 relative overflow-hidden"
        >
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-200"></div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 relative z-10 bg-white/90  border-x-2 border-blue-500 px-3 py-1 rounded-xl inline-block shadow-sm tracking-wide">
            Why Choose Us
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            Experience unmatched expertise and dedication in solar solutions.
          </p>

          <div className="space-y-6">
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                <FaClock className="text-blue-500 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  23 Years Experience
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-tight">
                  Decades of pioneering sustainable energy solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                <FaHeadset className="text-blue-500 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-tight">
                  Always available to ensure your satisfaction.
                </p>
              </div>
            </motion.div>

        
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-md">
                <FaCheckCircle className="text-blue-500 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Industry Certified
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-tight">
                  Adhering to the highest industry benchmarks.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
