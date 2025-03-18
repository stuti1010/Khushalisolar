"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    id: "01",
    title: "Reduced Carbon Footprint",
    description: "Solar panels significantly cut down greenhouse gas emissions, reducing global warming.",
    image: "/aboutimage.jpg",
  },
  {
    id: "02",
    title: "Lower Electricity Bills",
    description: "With solar energy, households and businesses save significantly on electricity costs.",
    image: "/aboutimage1.jpg",
  },
  {
    id: "03",
    title: "Energy Independence",
    description: "Solar power reduces dependence on non-renewable energy sources and boosts self-sufficiency.",
    image: "/aboutimage4.jpg",
  },
  {
    id: "04",
    title: "Sustainable Future",
    description: "A shift to solar energy ensures a greener, cleaner planet for future generations.",
    image: "/aboutimage3.jpg",
  },
];

export default function OurImpact() {
  const [hovered, setHovered] = useState<number | null>(null);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };


  return (
    <section className="bg-white text-gray-900 py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
       <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-600 relative inline-block"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {"Our Impact".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="relative"
            >
              {char}
              {char === " " ? "\u00A0" : ""}
            </motion.span>
          ))}
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.h2>

        <p className="mt-4 text-lg text-gray-600">
          Solar energy is transforming the world. Here&apos;s how we contribute to a cleaner planet.
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {impacts.map((impact, index) => (
          <div
            key={impact.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative group flex flex-col items-center justify-start text-center p-10 rounded-lg overflow-hidden bg-gray-50 border-l-4 border-blue-400 h-[320px] cursor-pointer transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${impact.image})` }}
              initial={{height:"350px"}}
              animate={{ height: hovered === index ? "520px" : "350px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            ></motion.div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full p-6">
              <div>
                <motion.h3
                  initial={{ scale: 1 }}
                  animate={{ scale: hovered === index ? 1.2 : 1 }}
                  className="text-6xl font-extrabold text-blue-600 drop-shadow-md"
                  transition={{ duration: 0.3 }}
                >
                  {impact.id}
                </motion.h3>
                <h4 className="text-2xl mt-2 font-semibold text-gray-900 group-hover:text-white 
               transition-colors duration-300 w-[200px] break-words leading-tight text-center">
                  {impact.title}
                        </h4>


              </div>
              <motion.div
                className="mt-4 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-gray-700 group-hover:text-white leading-relaxed mb-4 max-w-4xl text-md transition-colors duration-300">
                  {impact.description}
                </p>
                
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
