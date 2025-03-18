import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaUsers, FaDollarSign, FaClock } from "react-icons/fa";
import AboutSection from "../Components/AboutSecond";
import VisionandMission from "../Components/VisionandMission";
import AboutSection1 from "../Components/AboutFirst";
import ProcessSection from "../Components/Process";
import OurImpact from "../Components/OurImpact";



const AboutBanner = () => {
    return (
        <div className="container  mx-auto">
        <div className="relative max-w-auto md:h-[730px] h-auto flex items-center justify-between px-10 overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted>
                <source src="/cloudvideo.mp4" type="video/mp4"  />
            </video>
            
            <div className="md:w-[50%] sm:w-[70%] md:pb-20 pb-6 text-white">
                <h1 className="md:text-6xl sm:text-5xl md:pt-20 pt-32 font-bold mb-4 gap-3">Powering a Greener Future with Solar Energy</h1>
                <p className="text-lg mb-6 font-semibold text-gray-900 mr-6">At Khushali Solar Energy, we provide cutting-edge solar solutions to make clean energy accessible, sustainable, and affordable. Join us in building a brighter future.</p>
                <button className="relative px-8 py-3 font-semibold text-blue-500 bg-white border-2 border-blue-500 hover:border-white rounded-md shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg overflow-hidden group">
  <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
  <span className="relative z-10">Install Solar Today</span>
</button>
            </div>
<div className="hidden lg:block">
            <div className="relative pr-4 -top-32 w-[80%] items-center -pb-6 flex justify-center">
    <Image 
        src="/about1.svg" 
        width={1500} 
        height={1500} 
        className="h-full object-contain" 
        alt="Solar Panel Design" 
    />
</div>
</div>

         <div className="hidden lg:block">  
      <div className="absolute bottom-28 right-36 text-xl flex font-semibold flex-col gap-4 text-blue-900">
        <div className="flex items-center  p-5 rounded-2xl  bg-blue-50/20 gap-2">
          <FaCheckCircle className="w-8 h-8  text-white" />
          <p className="">Quality Work</p>
        </div>
        <div className="flex items-center p-5 rounded-2xl bg-blue-50/20 gap-2">
          <FaUsers className="w-8 h-8 text-white" />
          <p>Industrial Expert Team</p>
        </div>
        <div className="flex items-center p-5 rounded-2xl bg-blue-50/20 gap-2">
          <FaDollarSign className="w-8 h-8 text-white" />
          <p>Lowest Prices</p>
        </div>
        <div className="flex items-center p-5 rounded-2xl  bg-blue-50/20 gap-2">
          <FaClock className="w-8 h-8 text-white" />
          <p>End-to-End Services</p>
        </div>
      </div>
      </div> 

        </div>

<AboutSection1/>

     <AboutSection/>
        
        <VisionandMission/>

        <ProcessSection/>

        <OurImpact/>

        </div>
    );
};

export default AboutBanner;
