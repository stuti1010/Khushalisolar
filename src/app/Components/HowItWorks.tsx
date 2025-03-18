"use client";

import React from "react";
import Image from "next/image"; 

const HowItWorks = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center sm:mt-0 mt-6 text-blue-500 md:mb-4 sm:mb-0">
        How Khushali Solar Energy Works
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
          <div className="relative group -bottom-16 left-16  ">
            <Image
              src="/sun.jpg" 
              alt="Sun Energy"
              width={250}
              height={250}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-blue-500 text-white text-xs rounded py-1 px-2">
              Solar energy from the sun
            </div>
          </div>

          <div className="relative group md:right-36 sm:right-42 md:top-0 sm:top-8">
            <Image
              src="/house12.png" 
              alt="Home Powered by Solar"
              width={350} 
              height={350} 
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-blue-500 text-white text-xs rounded py-1 px-2">
              Powering your home sustainably
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            The Solar Power Process
          </h3>
          <ul className="space-y-6 text-gray-600 text-sm md:text-base">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                1
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Sunlight Capture</h4>
                <p>
                  Khushali Solar panels absorb sunlight using advanced photovoltaic cells, converting solar energy into electricity with maximum efficiency.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                2
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Energy Conversion</h4>
                <p>
                  The captured solar energy is transformed into usable electricity through an inverter, ensuring seamless integration with your home’s power system.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                3
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Power Distribution</h4>
                <p>
                  Clean, renewable energy powers your home, reducing reliance on fossil fuels and lowering your electricity bills sustainably.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                4
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Excess Energy Storage</h4>
                <p>
                  Surplus energy can be stored in batteries or fed back to the grid, maximizing efficiency and providing power even when the sun isn’t shining.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
