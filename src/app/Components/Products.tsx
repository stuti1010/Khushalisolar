'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
      transition: {
        duration: 0.3,
      },
    },
    tap: { scale: 0.98 },
  };

 
  const categories = [
    {
      name: 'Solar Panels',
      description: 'High-efficiency panels to harness solar energy for your home or business.',
      image: '/solarpannel.jpg',
      link: '/products/solar-panels',
    },
    {
      name: 'Solar Inverters',
      description: 'Convert solar energy into usable electricity with our advanced inverters.',
      image: '/solarInverter.jpg',
      link: '/products/solar-inverters',
    },
    {
      name: 'Solar Batteries',
      description: 'Store excess solar energy for use during low sunlight periods.',
      image: '/solarbatteries.jpg',
      link: '/products/solar-batteries',
    },
    {
      name: 'Solar Water Heaters',
      description: 'Eco-friendly water heating solutions powered by solar energy.',
      image: '/solarwaterheater.jpg',
      link: '/products/solar-water-heaters',
    },
    {
      name: 'Solar Street Lights',
      description: 'Energy-efficient lighting for streets, parks, and public areas.',
      image: '/solarlights.jpg',
      link: '/products/solar-street-lights',
    },
    {
      name: 'Complete Solar Systems',
      description: 'All-in-one solar solutions for seamless energy production.',
      image: '/solarsystem.jpg',
      link: '/products/complete-solar-systems',
    },
  ];

  return (
    <div className="container bg-white overflow-hidden">

      <div id="products" className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4 sm:mb-6"
          >
            Our Product Categories
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            Discover our range of solar energy solutions designed for efficiency, durability, and sustainability.
          </motion.p>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
            >

              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout='fill'
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {category.description}
                </p>
                <motion.button
                variants={buttonVariants}
                >
                <Link
                  href={category.link}

                  className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </Link></motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;