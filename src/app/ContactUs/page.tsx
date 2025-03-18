"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../Components/Contact";
import ContactUs from "../Components/ContactUs";

export default function ContactBanner() {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto px-0 sm:px-6 lg:px-0">
      <section className="relative w-full h-[110vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/aboutimage4.jpg"
            alt="Khushali Solar Energy Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-lg text-white space-y-6">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl sm:pt-0 pt-14 font-bold leading-tight"
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {"Let's Connect With Khushali Solar Energy!".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                  {char === " " ? "\u00A0" : ""}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl">
              Reach out to us for top-notch solar energy solutions. We are here to assist you with
              sustainable and cost-effective energy options.
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:w-1/2">
            <motion.div
              className="bg-transparent text-black p-6 rounded-3xl shadow-2xl shadow-blue-100 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-blue-200 p-1 sm:p-2 rounded-br-4xl rounded-tl-4xl">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Office Location</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Sector-519 scheme-B71 Gumasta Nagar, Indore
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-200 p-2 rounded-br-4xl rounded-tl-4xl">
                  <FaPhone className="text-blue-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Contact Us</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">+91 96910 13327</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-200 p-2 rounded-br-4xl rounded-tl-4xl">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">info@khushalisolar.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-black p-6 rounded-bl-4xl rounded-tr-4xl shadow-lg flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Image
                src="/aboutimage4.jpg"
                alt="Solar Panels"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40 sm:h-48"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Powering a Brighter Future</h3>
                <p className="text-gray-600 mt-2 text-xs sm:text-sm">
                  Join us in harnessing the sun&apos;s energy for a sustainable tomorrow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/**second part  */}
      <Contact />
     
     {/**third part  */}
     <ContactUs/>

     {/**forth part */}
     <div className="mt-10 text-center md:pl-10 md:text-left">
  <h2 className="text-2xl font-semibold text-blue-600">Our Office</h2>
  <p className="text-gray-700">Sector-519 scheme-B71 Gumasta Nagar, Indore</p>
  <iframe 
    className="w-full h-72 md:h-96 mt-4 md:px-10 py-3 px-3"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6812956438134!2d75.83025567508177!3d22.702905179399107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0002b7c565%3A0x29a188e842e3605e!2sKhushali%20solar%20energy%20solutions!5e0!3m2!1sen!2sin!4v1742121101082!5m2!1sen!2sin"
    loading="lazy" >
  </iframe>
</div>

    </div>
  );
}