"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const SavingsCalculator = () => {
    const [bill, setBill] = useState<string>("");
    const [savings, setSavings] = useState<number | null>(null);

    const calculateSavings = () => {
        const billAmount = parseFloat(bill); 
      
        if (isNaN(billAmount) || billAmount <= 0) {
          setSavings(null);
          return;
        }
      
        const estimatedSavings = (billAmount * 0.7).toFixed(2); // 70% savings
        setSavings(parseFloat(estimatedSavings)); 
      };
      

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dotsClass: "slick-dots custom-dots", 
  };

  return (
    <div className="py-12">
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center relative overflow-hidden"
        >
         
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-200"></div>

          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 tracking-wide">
            💡 Solar Savings Calculator
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed max-w-md mx-auto">
            Enter your monthly electricity bill in ₹ and see your potential savings with solar energy!
          </p>

          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
              ₹
            </span>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Enter bill amount"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
            />
          </div>

        
          <button
            onClick={calculateSavings}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Calculate Savings
          </button>

          
          {savings !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-blue-100 p-4 rounded-lg shadow-md text-blue-800 font-bold text-lg sm:text-xl"
            >
              🎉 You can save{" "}
              <span className="text-green-600">₹{savings}</span> per month!
            </motion.div>
          )}

         
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full  max-w-lg"
        >
          <Slider {...settings}>
            
            <div className="px-2">
              <Image
                src="/calculator.png" 
                width={500}
                height={500}
                alt="Solar Panel Installation"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain  "
              />
            </div>
         
            <div className="px-2">
              <Image
                src="/calculator1.png"
                width={500}
                height={350} 
                alt="Solar Energy System"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain"
              />
            </div>
            
            <div className="px-2">
              <Image
                src="/calculator.png" 
                alt="Solar Maintenance"
                width={500}
                height={350}
                className="w-full h-64 sm:h-72 lg:h-80 object-contain "
              />
            </div>
          </Slider>
        </motion.div>
      </div>

     
      <style jsx>{`
        .custom-dots li button:before {
          font-size: 12px;
          color: #bfdbfe;
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          color: #3b82f6;
          opacity: 1;
        }
      `}</style>
    </section>
    </div>
  );
};

export default SavingsCalculator;