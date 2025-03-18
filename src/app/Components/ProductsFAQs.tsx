'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const accordionVariants = {
    closed: { height: 0, opacity: 0 },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const faqs = [
    {
      question: 'Which solar panel is best for home use?',
      answer:
        'Khushali Solar Energy offers high-efficiency monocrystalline panels, such as the Khushali Solar Panel 200W and 500W, ideal for home use. These panels provide excellent performance with up to 22% efficiency, durability in various weather conditions, and are perfect for optimizing space on rooftops. Consult our experts for a personalized recommendation based on your energy needs and roof size.',
    },
    {
      question: 'How much can I save with Khushali solar panels?',
      answer:
        'With Khushali solar panels, homeowners can save 20-40% on electricity bills annually, depending on usage and system size. Our 500W hybrid panels, paired with efficient inverters, maximize savings by generating clean energy and reducing reliance on the grid. Incentives and net metering can further enhance your savings—contact us for a detailed cost analysis.',
    },
    {
      question: 'Do Khushali solar panels work in cloudy weather?',
      answer:
        'Yes, Khushali solar panels are designed to generate electricity even on cloudy days using advanced photovoltaic technology. While output may be slightly reduced, our panels still perform efficiently, ensuring a reliable power supply. Regular cleaning and maintenance can optimize performance in all weather conditions.',
    },
    {
      question: 'What is the lifespan of Khushali solar panels?',
      answer:
        'Khushali solar panels come with a 25-year performance warranty and are built to last 30-35 years with proper care. Our panels are made with durable tempered glass and high-quality materials, backed by a 10-15 year product warranty, ensuring long-term reliability for your investment.',
    },
    {
      question: 'Do I need a battery with Khushali solar panels?',
      answer:
        'It depends on your needs. Khushali solar panels work without a battery if connected to the grid, thanks to net metering. However, for backup power during outages, we recommend pairing them with our Khushali Lithium-Ion Battery Storage solutions. Our experts can assess your requirements and suggest the best setup.',
    },
  ];

  return (
    <section className=" py-10 sm:py-12 md:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 md:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 text-center mb-6 sm:mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          Discover answers to common questions about Khushali Solar Energy products and solutions.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-blue-200 last:border-b-0"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left py-4 sm:py-5 text-blue-700 font-semibold text-lg sm:text-xl flex justify-between items-center hover:text-blue-900 transition-colors duration-300"
              >
                {faq.question}
                <span>
                  {activeIndex === index ? (
                    <motion.svg
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </motion.svg>
                  )}
                </span>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden text-gray-700 text-base sm:text-lg"
                  >
                    <p className="py-4 sm:py-5">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQs;