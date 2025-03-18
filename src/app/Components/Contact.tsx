'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
  phone: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Invalid email';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      setFormData({ name: '', email: '', subject: '', message: '', company: '', phone: '' });
      setErrors({});
    }
  };

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

  const waveVariants = {
    animate: {
      backgroundPositionX: ['0%', '100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-20 overflow-hidden">
      {/* Left Side with Wave Background */}
      <motion.div
        className="w-full md:w-1/2 h-[400px] sm:h-[450px] md:h-full min-h-[500px] relative"
        variants={waveVariants}
        animate="animate"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618843479313-4f07c4d7d8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-blue-600/50 p-6 sm:p-8 md:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.h2 variants={itemVariants} className="text-base sm:text-lg md:text-lg font-semibold mb-4 sm:mb-6">
              GET IN TOUCH
            </motion.h2>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl max-w-md md:max-w-3xl font-bold mt-2"
            >
              Have a question or feedback?
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 sm:mt-3 text-sm sm:text-base md:text-base leading-tight max-w-xs sm:max-w-sm md:max-w-md"
            >
              Reach out to us for any queries regarding Khushali Solar Energy solutions. We are happy to assist you.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl shadow-blue-300 mt-4 sm:mt-6 md:mt-0 relative z-10"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div variants={itemVariants} className="col-span-1">
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Name*</label>
            <input
              type="text"
              name="name"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Company</label>
            <input
              type="text"
              name="company"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Company"
              onChange={handleChange}
              value={formData.company}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Email*</label>
            <input
              type="email"
              name="email"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Subject*</label>
            <input
              type="text"
              name="subject"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Subject"
              onChange={handleChange}
              value={formData.subject}
            />
            {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <label className="block text-gray-700 font-medium text-sm sm:text-base">Message*</label>
            <textarea
              name="message"
              className="w-full bg-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 h-24 sm:h-28 md:h-32 resize-none"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
            />
            {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 sm:py-3 sm:px-10 w-full max-w-[200px] sm:max-w-xs rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Submit
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;