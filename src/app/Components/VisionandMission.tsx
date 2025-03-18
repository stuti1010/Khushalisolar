"use client";

import React from "react";
import Image from "next/image";

const VisionandMission = () => {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <style jsx>{styles}</style>
      <div className="absolute inset-0 opacity-20 animate-pulse-slow">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 200 Q150 50 300 200 Q450 350 600 200 Q750 50 900 200"
            fill="none"
            stroke="rgba(0, 119, 182)"
            strokeWidth="4"
          />
          <circle cx="200" cy="300" r="100" fill="rgba(34, 197, 94)" />
          <circle cx="700" cy="100" r="80" fill="rgba(252, 211, 77)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-center">
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-72 md:h-96 lg:w-72 lg:h-96 mb-6 sm:mb-0">
            <Image
              src="/home.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500 shadow-2xl transform hover:scale-105 transition-all duration-500"
              alt="Solar Panel Vision"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent">
                Agility
              </span>
            </div>
          </div>
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-72 md:h-96 lg:w-72 lg:h-96 mb-6 sm:mb-0">
            <Image
              src="/image.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500 shadow-2xl transform hover:scale-105 transition-all duration-500"
              alt="Solar Panel Vision"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent">
                Safety
              </span>
            </div>
          </div>
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-72 md:h-96 lg:w-72 lg:h-96 mb-6 sm:mb-0">
            <Image
              src="/image2.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500 shadow-2xl transform hover:scale-105 transition-all duration-500"
              alt="Solar Panel Vision"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-600 bg-clip-text text-transparent">
                Ethics
              </span>
            </div>
          </div>

          <div className="bg-opacity-90 p-4 sm:p-6 md:p-8 lg:p-10 h-auto sm:h-36 md:h-40 lg:h-80 rounded-2xl border-r-8 bg-white border-blue-500/35 shadow-lg hover:shadow-xl transition-all duration-300 mb-4 sm:mb-0 w-full max-w-3xl animate__animated animate__zoomIn"
            style={{ animationDelay: "0.3s", animationDuration: "1s" }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text">
              Our Vision
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              To pioneer a world powered by clean energy, leveraging advanced solar
              technology to create a sustainable future, reducing carbon footprints,
              and inspiring global adoption of renewable resources.
            </p>
          </div>

          <div className="bg-gradient-to-bl from-blue-300 via-blue-500 to-blue-300 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl animate__animated animate__zoomIn"
            style={{ animationDelay: "0.5s", animationDuration: "1s" }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Our Mission
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
              To deliver accessible, efficient, and innovative solar energy solutions,
              empowering communities and businesses with eco-friendly technology,
              backed by expertise and a commitment to environmental stewardship.
            </p>
          </div>
        </div>

        {/* Side Decorative Elements */}
        <div className="absolute -top-16 sm:-top-20 lg:-top-24 left-2 sm:left-4 lg:-left-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-600 rounded-full animate-slow-spin animate-hover-slow"></div>

        <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 right-2 sm:right-4 lg:-right-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-600 rounded-full animate-slow-spin animate-hover-slow"></div>
      </div>
    </div>
  );
};

// Custom Animations
const styles = `
  @keyframes pulse-slow {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  @keyframes slow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-slow-spin {
    animation: slow-spin 20s linear infinite;
  }
  .animate-hover-slow {
    transition: transform 0.5s ease;
  }
  .animate-hover-slow:hover {
    transform: scale(1.1);
  }
`;

export default VisionandMission;