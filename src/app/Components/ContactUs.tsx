'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactUs = () => {
  
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

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(59, 130, 246, 0.5)',
        '0 0 40px rgba(59, 130, 246, 0.8)',
        '0 0 20px rgba(59, 130, 246, 0.5)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="py-12 container mx-auto overflow-hidden">
     
      <div className="relative container mx-auto w-full h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] flex items-center justify-center">
        <Image
          src="/background.jpg"
          alt="Khushali Solar Energy Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white z-10"
        >
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Connect with Khushali Solar Energy
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-4 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto">
            Join us in creating a sustainable future with solar and wind energy solutions!
          </motion.p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 bg-white">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center mb-8 sm:mb-10"
        >
          Follow Us on Social Media
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap"
        >
          <motion.a
            variants={itemVariants}
            href="https://facebook.com/khushalisolar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://twitter.com/khushalisolar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://instagram.com/khushalisolar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="https://linkedin.com/company/khushalisolar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="relative w-full py-10 sm:py-12 md:py-8 overflow-hidden">
        <Image
          src="/why.jpg"
          alt="Khushali Solar Energy CTA Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-70"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              Expert Customer Support
            </motion.h2>
            <motion.ul
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto lg:mx-0 space-y-4"
            >
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-2xl">✔</span>
                <span>24/7 assistance for all your solar and wind energy queries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-2xl">✔</span>
                <span>Quick troubleshooting for installation or maintenance issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-2xl">✔</span>
                <span>Personalized support from Khushali&apos;s certified energy experts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-300 text-2xl">✔</span>
                <span>Guidance on maximizing energy efficiency and savings.</span>
              </li>
            </motion.ul>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <motion.a
                href="tel:+919691013327"
                className="inline-block bg-white text-blue-600 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 text-sm sm:text-base md:text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={glowVariants}
                animate="animate"
              >
                Call Support: +91 96910 13327
              </motion.a>
              <motion.a
                href="mailto:support@khushalisolar.com"
                className="inline-block bg-blue-500 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base md:text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={glowVariants}
                animate="animate"
              >
                Email Support
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-64 sm:w-80 md:w-96 lg:w-[450px] h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <Image
                src="/contact.png"
                alt="Sustainable Energy Future"
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 border-4 border-blue-600 rounded-2xl opacity-50"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-blue-400 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default ContactUs;