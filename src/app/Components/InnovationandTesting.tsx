"use client";

import { useState } from "react";
import { FaCheckCircle,FaRocket, FaShieldAlt} from "react-icons/fa";
import Image from "next/image";

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("innovation");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      
      <div className="flex justify-center space-x-8  pb-4">
        <button
          className={`text-xl  pb-2 border-b-2 transition-all duration-300 ${
            activeTab === "innovation" ? "border-blue-600 font-semibold text-lg text-blue-500" : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("innovation")}
        >
          INNOVATION
        </button>
        <button
          className={`text-xl  pb-2 border-b-2 transition-all duration-300 ${
            activeTab === "testing" ? "border-blue-600 font-semibold text-lg text-blue-500" : "border-transparent text-gray-500"
          }`}
          onClick={() => setActiveTab("testing")}
        >
          TESTING
        </button>
      </div>
      {/* Innovation Section */}
      {activeTab === "innovation" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className=" p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
            <FaCheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl text-center font-semibold text-gray-800 mb-3">Quality</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At Khushali Solar Energy, we are committed to upholding the highest quality standards in solar panel manufacturing, ensuring exceptional reliability, efficiency, and durability in every installation. Our state-of-the-art technology, rigorous testing procedures, and dedication to innovation allow us to deliver premium solar solutions that maximize energy output and longevity. With a focus on sustainability and performance, we design our solar panels to withstand diverse environmental conditions, providing long-term value and energy savings.
            </p>
          </div>
          <div className=" p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
            <FaShieldAlt className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl text-center font-semibold text-gray-800 mb-3">Reliability</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our cutting-edge solar solutions are meticulously engineered for long-term performance, ensuring unmatched efficiency, reliability, and sustainability even in the most challenging environments. Designed to withstand extreme weather conditions, our panels deliver consistent energy output with minimal maintenance, maximizing your return on investment. Through advanced technology, superior materials, and rigorous quality control, we guarantee optimal performance, helping you harness clean energy for years to come.
            </p>
          </div>
          <div className=" p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
            <FaRocket className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl text-center font-semibold text-gray-800 mb-3">Technology</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Leveraging cutting-edge advancements in solar technology, Khushali Solar Energy is dedicated to maximizing energy efficiency while significantly reducing environmental impact. Our innovative approach integrates high-performance photovoltaic systems, advanced energy storage solutions, and smart grid compatibility to ensure optimal power generation with minimal carbon footprint. Through continuous research and development, we create eco-friendly, cost-effective solar solutions that promote sustainability without compromising on performance.
            </p>
          </div>
        </div>
      )}

     {/* Testing Section */}
{activeTab === "testing" && (
  <div className="flex flex-col md:flex-row items-center mt-8 gap-8">
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Comprehensive Testing Standards
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
        At <strong>Khushali Solar Energy</strong>, we implement **rigorous** and **industry-leading** testing protocols to ensure the **durability, efficiency, and optimal performance** of our solar panels. Our advanced testing methodology guarantees that each panel meets **global quality standards**, offering **unmatched reliability** and **long-term sustainability**. Our testing process includes:
      </p>
      <ul className="space-y-3 text-gray-600 text-sm md:text-base">
        <li className="flex items-center">
          <FaCheckCircle className="w-10 h-10 text-blue-500 mr-5" />
          <span>Extreme weather simulations, including heat, cold, and humidity resistance, to ensure resilience in any environment.</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="w-10 h-10 text-blue-500 mr-5" />
          <span>Performance benchmarking under **varied light conditions**, optimizing energy efficiency from dawn to dusk.</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="w-10 h-10 text-blue-500 mr-5" />
          <span>Longevity and stress tests to guarantee **decades of reliable service** with minimal maintenance.</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="w-10 h-10 text-blue-500 mr-5" />
          <span>Advanced electrical safety inspections to prevent power losses and enhance operational stability.</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="w-10 h-10 text-blue-500 mr-5" />
          <span>Comprehensive quality checks to detect and eliminate **micro-cracks, defects, or efficiency losses**.</span>
        </li>
      </ul>
    </div>

<div className="w-full md:w-1/2 flex justify-center relative">
  <div className="relative">
    <div className="absolute top-0 right-0 w-48 h-48 border-t-4 border-r-4 border-blue-600"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 border-b-4 border-l-4 border-blue-600"></div>
    <Image
      src="/home.jpg"
      alt="Khushali Solar Energy Testing Process"
      width={300} 
      height={200} 
      className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm object-cover"
    />
  </div>
</div>
  </div>
)}

    </div>
  );
};

export default ServiceSection;
