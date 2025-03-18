import React from "react";
import Image from "next/image";
import { FaShieldAlt, FaSolarPanel, FaLeaf, FaBolt, FaTools, FaRecycle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-5 lg:px-10 py-20 ">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
        <div
          className="relative border-l-8 border-blue-500 p-5 sm:p-6 rounded-2xl shadow-lg shadow-blue-200 bg-white animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.2s", animationDuration: "1s" }}
        >
          <Image
            src="/image2.jpg"
            width={400}
            height={400}
            alt="Solar Engineer"
            className="rounded-lg object-contain transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 bg-blue-100 hover:bg-blue-300 transition-all duration-300 shadow-md p-2 sm:p-3 rounded-lg flex items-center gap-2">
            <span className="text-yellow-500 text-xl sm:text-2xl">⭐ 4.5</span>
            <p className="text-gray-800 text-xs sm:text-sm">(1,200 reviews)</p>
          </div>
        </div>
      </div>

      {/* Right Text and Features Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-6 text-gray-800 animate__animated animate__fadeInRight"
            style={{ animationDelay: "0.4s", animationDuration: "1s" }}>
          Fastest & Secure Way to Get Renewable Energy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { icon: <FaShieldAlt />, text: "Safety & Reliable Service" },
            { icon: <FaSolarPanel />, text: "Quality Energy Solution" },
            { icon: <FaLeaf />, text: "Maximize Green Resources" },
            { icon: <FaBolt />, text: "Future with Green Energy" },
            { icon: <FaTools />, text: "One Step Solutions" },
            { icon: <FaRecycle />, text: "Clean & Renewable" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gradient-to-bl from-blue-400 via-blue-500 to-blue-400 p-4 sm:p-5 rounded-xl shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:via-blue-600  hover:to-blue-500 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s`, animationDuration: "0.8s" }}
            >
              <span
                className="text-white text-xl sm:text-2xl mr-3 transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-gray-800 animate-pulse"
                style={{ animationDuration: "2s" }}
              >
                {item.icon}
              </span>
              <p className="text-white font-medium text-sm sm:text-base transition-colors duration-300 hover:text-gray-100">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;