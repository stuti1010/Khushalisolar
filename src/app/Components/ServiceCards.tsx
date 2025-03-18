'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSolarPanel, FaTools, FaBatteryFull, FaLightbulb } from 'react-icons/fa';

const services = [
  { title: 'Solar Panel Installation', description: 'Expert installation for maximum efficiency.', icon: <FaSolarPanel /> },
  { title: 'Maintenance & Repairs', description: 'Ensuring longevity and optimal performance.', icon: <FaTools /> },
  { title: 'Energy Consultation', description: 'Customized solar solutions for your needs.', icon: <FaLightbulb /> },
  { title: 'Battery Storage', description: 'Store excess energy for later use.', icon: <FaBatteryFull /> },
];

export default function ServiceShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-6 pt-20 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-10 uppercase tracking-wide">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative bg-white p-8 rounded-3xl hover:bg-blue-500 shadow-xl cursor-pointer flex flex-col items-center justify-center text-center border border-blue-400 overflow-hidden transition-all duration-500 ${hovered === index ? 'bg-blue-500' : ''}`}
            whileHover={{ scale: 1.1, rotate: 3 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className={`text-6xl mb-4 drop-shadow-lg  transition-all duration-300 ${hovered === index ? 'text-white' : 'text-blue-500'}`}
              animate={{ rotate: hovered === index ? 360 : 0, scale: hovered === index ? 1.2 : 1 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <h3 className={`text-2xl font-semibold mb-2 transition-all duration-300 ${hovered === index ? 'text-white' : 'text-blue-500'}`}>{service.title}</h3>
            <p className={`text-lg transition-all duration-300 ${hovered === index ? 'text-white' : 'text-gray-700'}`}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
