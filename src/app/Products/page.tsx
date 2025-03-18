'use client';
import { motion } from 'framer-motion';
import Products from '../Components/Products';
import ProductFilters from '../Components/ProductFilter';
import FAQs from '../Components/ProductsFAQs';


const ProductPage = () => {
  // Animation variants
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

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="relative w-full  sm:min-h-[550px] md:min-h-[600px] lg:min-h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          poster="/image1.jpg" 
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white pt-32"
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
            >
              Our Solar Solutions for a Brighter Future
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              High-efficiency solar panels and energy solutions for homes & businesses
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a
                href="#products"
                className="inline-block bg-white text-blue-700 font-bold sm:mb-0 mb-4 py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 text-sm sm:text-base md:text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Products
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className='container mx-auto'>
        <Products/>
      </div>
      <ProductFilters/>

      <FAQs/>
    </div>
  );
};

export default ProductPage;