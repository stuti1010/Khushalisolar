'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Disclaimer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
        damping: 15,
      },
    },
  };

  const decorativeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="bg-white py-10 sm:py-12 md:py-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-8"
      >
        {/* Decorative Elements */}
        <motion.div
          variants={decorativeVariants}
          className="absolute top-28 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400 rounded-full animate-pulse opacity-20"
        />
        <motion.div
          variants={decorativeVariants}
          className="absolute bottom-20 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-400 rounded-full animate-pulse opacity-20 delay-1000"
        />
        <motion.div className="relative z-10 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-6 sm:mb-8 sm:pt-0 pt-16"
          >
            Disclaimer
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 "
          >
            Welcome to the Khushali Solar Energy website. Please read the following disclaimer carefully to understand the terms under which you use our services and products.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 text-left max-w-4xl mx-auto"
          >
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              <strong>1. No Warranty:</strong> The information provided on this website regarding Khushali Solar Energy products, including solar panels, inverters, batteries, and systems, is for general informational purposes only. While we strive to ensure accuracy, Khushali Solar Energy does not guarantee the completeness, reliability, or suitability of this information for any specific purpose. Products and services are providing without any warranties, express or implied, unless otherwise stated in writing.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              <strong>2. Liability Limitation:</strong> Khushali Solar Energy shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our products or information on this website. This includes, but is not limited to, damages related to installation errors, performance issues, or unforeseen environmental factors. Users are encouraged to consult certified professionals for installation and maintenance.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              <strong>3. Product Performance:</strong> The efficiency, savings, and lifespan of Khushali Solar Energy products (e.g., up to 22% efficiency, 25-35 year lifespan) are based on ideal conditions and manufacturer specifications. Actual performance may vary due to weather, installation quality, and usage patterns. We recommend regular maintenance to optimize results.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              <strong>4. Third-Party Links:</strong> This website may contain links to third-party sites for additional resources or products. Khushali Solar Energy is not responsible for the content, accuracy, or reliability of these external sites and does not endorse them.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              <strong>5. Changes to Disclaimer:</strong> Khushali Solar Energy reserves the right to update or modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically. Continued use of our website or products after such changes constitutes acceptance of the updated terms.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              For further inquiries or clarification, please contact us at{' '}
              <Link href="mailto:support@khushalisolarenergy.com" className="text-blue-600 hover:underline">
                support@khushalisolarenergy.com
              </Link>{' '}
              or call our support line at +91-123-456-7890. Thank you for choosing Khushali Solar Energy for your renewable energy needs!
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300 text-sm sm:text-base"
            >
              Contact Us for More Information
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Disclaimer;