"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaClipboardCheck, FaTools, FaCheckCircle, FaBolt } from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck className="text-white  hover:text-blue-500  text-4xl" />, 
    title: "Consultation & Assessment",
    description: "We analyze your energy needs and provide expert consultation.",
  },
  {
    icon: <FaSolarPanel className="text-white text-4xl" />, 
    title: "Site Survey & Proposal",
    description: "Our team visits the site, conducts a survey, and prepares a plan.",
  },
  {
    icon: <FaCheckCircle className="text-white text-4xl" />, 
    title: "Agreement & Permits",
    description: "We handle all the paperwork and approvals for a hassle-free setup.",
  },
  {
    icon: <FaTools className="text-white text-4xl" />, 
    title: "Installation & Quality Check",
    description: "Our experts install the solar panels with precision and perform quality checks.",
  },
  {
    icon: <FaBolt className="text-white text-4xl" />, 
    title: "Activation & Monitoring",
    description: "Your solar system is activated, and you can track energy savings in real-time.",
  },
];

export default function ProcessSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" text-white py-4  px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-500"
        >
          Our Solar Installation Process
        </motion.h2>
        <p className="mt-4 text-lg text-gray-800">
          A streamlined, efficient, and hassle-free approach to powering your home with solar energy.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto mt-12 flex flex-col space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className="w-1/2 p-6 bg-white text-blue-500 rounded-2xl shadow-blue-300 shadow-lg hover:bg-blue-500 transition-all duration-300 hover:text-gray-900">
              <div className="p-4 bg-blue-500 hover:bg-white rounded-full mb-4 w-fit">{step.icon}</div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-500 hover:text-gray-900 transition-all duration-300">
                {step.description}
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
  <motion.div
    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <motion.div
      className="w-6 h-6 bg-gray-900 rounded-full"
      animate={{ scale: [1, 0.8, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
