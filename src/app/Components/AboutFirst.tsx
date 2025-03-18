"use client";

import React from "react";
import { useState, useRef } from "react";
import { FaUserTie, FaChartLine, FaPlay, FaPause } from "react-icons/fa";

const AboutSection1 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    console.log(videoRef.current); 
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container mx-auto pt-36">
      <div className="bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-400 text-white py-16 px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="relative w-full lg:w-1/3 -top-32">
          <div className="relative">
            <video
              ref={videoRef}
              src="/video2.mp4" 
              loop
              muted
              controls
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                {isPlaying ? (
                  <FaPause className="text-white w-8 h-8" />
                ) : (
                  <FaPlay className="text-white w-8 h-8" />
                )}
              </div>
            </button>
          </div>

          <div className="absolute bottom-[-40px] left-5 w-[80%] bg-white text-gray-100 shadow-lg p-5 rounded-lg flex items-center">
            <div className="bg-blue-500 text-white px-4 py-2 text-2xl font-bold rounded-md">
              24
            </div>
            <div className="ml-4 text-blue-500">
              <h3 className="text-lg font-semibold">Years of Experience</h3>
              <p className="text-sm">In renewable energy solutions</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-14 lg:mt-0">
          <h2 className="text-3xl font-bold leading-snug">
            Take Your Renewable Energy <br /> To The Next Level!
          </h2>
          <p className="mt-4 text-gray-200">
            At Khushali Solar Energy, we are committed to providing efficient, sustainable,
            and cost-effective solar energy solutions. Our expert team ensures quality
            service, from consultation to installation.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <span className="text-white text-4xl">
                <FaUserTie />
              </span>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Qualified Consultants</h3>
                <p className="text-gray-200 text-sm">
                  Expert guidance for sustainable energy solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-white text-4xl">
                <FaChartLine />
              </span>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Best Business Analysis</h3>
                <p className="text-gray-200 text-sm">
                  Comprehensive assessment for optimal energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;