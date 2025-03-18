'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiArrowNarrowRight, HiChevronDown , HiChevronUp } from 'react-icons/hi';
import Link from 'next/link';

const TermsAndConditions = () => {
  // State for accordion on mobile
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
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

  // Sections for easy navigation
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'acceptance', title: '2. Acceptance of Terms' },
    { id: 'products-services', title: '3. Products and Services' },
    { id: 'orders-payments', title: '4. Orders and Payments' },
    { id: 'shipping-delivery', title: '5. Shipping and Delivery' },
    { id: 'returns-refunds', title: '6. Returns and Refunds' },
    { id: 'warranty', title: '7. Warranty' },
    { id: 'limitation-liability', title: '8. Limitation of Liability' },
    { id: 'intellectual-property', title: '9. Intellectual Property' },
    { id: 'governing-law', title: '10. Governing Law' },
    { id: 'changes-terms', title: '11. Changes to Terms' },
    { id: 'contact-us', title: '12. Contact Us' },
  ];

  return (
    <div className="container mx-auto bg-white overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mt-10 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            >
              These Terms and Conditions govern your use of Khushali Solar Energy’s products and services. Please read them carefully.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10">
        {/* Sidebar Navigation (Desktop) / Accordion (Mobile) */}
        <div className="lg:w-1/4">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block sticky top-20 bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4">Sections</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 text-base sm:text-lg"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex justify-between items-center py-3 sm:py-4 text-left text-gray-700 font-medium text-base sm:text-lg hover:text-blue-600 focus:outline-none"
                >
                  <span>{section.title}</span>
                  {openSection === section.id ? (
                    <HiChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {openSection === section.id && (
                  <div className="pb-4 text-gray-700 text-sm sm:text-base">
                    <a href={`#${section.id}`} className="text-blue-600 hover:underline">
                      Jump to Section
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="lg:w-3/4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 sm:space-y-12"
          >
            {/* 1. Introduction */}
            <motion.section variants={itemVariants} id="introduction">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Welcome to Khushali Solar Energy (&ldquo;we&rldquo;,&ldquo;us&rldquo; or &ldquo;our&rldquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your purchase and use of our solar panels, wind turbines, and related renewable energy products and services, as well as your access to our website (www.khushalisolar.com) and any associated services. By placing an order or using our services, you agree to be bound by these Terms, including any additional policies referenced herein.
              </p>
            </motion.section>

            {/* 2. Acceptance of Terms */}
            <motion.section variants={itemVariants} id="acceptance">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                2. Acceptance of Terms
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                By accessing our website, placing an order, or using any of our products or services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must not use our services or purchase our products. We reserve the right to update these Terms at our discretion, and continued use of our services after such changes constitutes your acceptance of the updated Terms.
              </p>
            </motion.section>

            {/* 3. Products and Services */}
            <motion.section variants={itemVariants} id="products-services">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                3. Products and Services
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Khushali Solar Energy provides renewable energy solutions, including but not limited to:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Solar panels for residential, commercial, and industrial use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Wind turbines for on-site energy generation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Installation, maintenance, and consulting services for renewable energy systems.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                Product descriptions, specifications, and pricing are subject to change without notice. We strive to ensure accuracy but are not liable for errors or omissions in product information.
              </p>
            </motion.section>

            {/* 4. Orders and Payments */}
            <motion.section variants={itemVariants} id="orders-payments">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                4. Orders and Payments
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                All orders placed through our website or sales representatives are subject to acceptance by Khushali Solar Energy. We reserve the right to refuse or cancel any order for reasons including product availability, pricing errors, or suspected fraud.
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Payment Terms:</strong> Full payment is required at the time of order unless otherwise agreed in writing. We accept payments via credit/debit cards, bank transfers, and other methods specified at checkout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Pricing:</strong> Prices are quoted in Indian Rupees (INR) and exclude applicable taxes, shipping, and installation fees unless stated otherwise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Order Confirmation:</strong> You will receive an email confirmation upon successful order placement, which does not guarantee product availability until confirmed by our team.</span>
                </li>
              </ul>
            </motion.section>

            {/* 5. Shipping and Delivery */}
            <motion.section variants={itemVariants} id="shipping-delivery">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                5. Shipping and Delivery
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We aim to deliver products within the estimated timelines provided at the time of purchase. However, delivery dates are not guaranteed and may be affected by factors beyond our control, such as weather conditions, logistics delays, or customs clearance for international orders.
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Shipping Costs:</strong> Shipping fees will be calculated and displayed at checkout based on your location and order size.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Risk of Loss:</strong> The risk of loss or damage to products passes to you upon delivery to the shipping carrier.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Inspection:</strong> You are responsible for inspecting products upon receipt and reporting any damages or discrepancies within 48 hours.</span>
                </li>
              </ul>
            </motion.section>

            {/* 6. Returns and Refunds */}
            <motion.section variants={itemVariants} id="returns-refunds">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                6. Returns and Refunds
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We strive for your satisfaction with our renewable energy products. Returns and refunds are subject to the following conditions:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Eligibility:</strong> Products must be unused, in their original packaging, and returned within 30 days of delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Non-Returnable Items:</strong> Custom-made solar panels, installation services, and opened consumables are non-returnable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Refund Process:</strong> Refunds will be processed within 10 business days of receiving the returned product, minus any shipping or restocking fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Return Shipping:</strong> You are responsible for return shipping costs unless the product is defective or incorrect.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                To initiate a return, contact our customer support team at <a href="mailto:support@khushalisolar.com" className="text-blue-600 hover:underline">support@khushalisolar.com</a>.
              </p>
            </motion.section>

            {/* 7. Warranty */}
            <motion.section variants={itemVariants} id="warranty">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                7. Warranty
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Khushali Solar Energy provides a limited warranty on our products as follows:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Solar Panels:</strong> 25-year performance warranty ensuring at least 80% efficiency after 25 years, and a 10-year product warranty against manufacturing defects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Wind Turbines:</strong> 5-year warranty covering parts and labor for defects under normal use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Exclusions:</strong> Warranty does not cover damage due to improper installation, misuse, neglect, or natural disasters.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                To claim warranty services, contact us with your proof of purchase and a description of the issue. Warranty claims are subject to inspection and approval by our team.
              </p>
            </motion.section>

            {/* 8. Limitation of Liability */}
            <motion.section variants={itemVariants} id="limitation-liability">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To the maximum extent permitted by law, Khushali Solar Energy shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services, including but not limited to:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Loss of profits, revenue, or business opportunities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Damage to property or equipment due to improper use of our products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Delays or interruptions in energy generation caused by external factors.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                Our total liability for any claim shall not exceed the amount paid by you for the product or service in question.
              </p>
            </motion.section>

            {/* 9. Intellectual Property */}
            <motion.section variants={itemVariants} id="intellectual-property">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                All content on our website, including but not limited to product designs, logos, trademarks, text, images, and technical specifications, is the intellectual property of Khushali Solar Energy or its licensors. You may not reproduce, distribute, or use any of our intellectual property without prior written permission, except for personal, non-commercial use as permitted by law.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                Any unauthorized use of our intellectual property may result in legal action, including claims for damages and injunctive relief.
              </p>
            </motion.section>

            {/* 10. Governing Law */}
            <motion.section variants={itemVariants} id="governing-law">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                10. Governing Law
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Madhya Pradesh, India, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh, India.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </motion.section>

            {/* 11. Changes to Terms */}
            <motion.section variants={itemVariants} id="changes-terms">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may modify these Terms and Conditions at our sole discretion to reflect changes in our business practices, legal requirements, or product offerings. We will notify you of significant changes by posting the updated Terms on our website or by sending you an email notification at least 30 days before the changes take effect.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                Your continued use of our products or services after such changes constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must discontinue using our services.
              </p>
            </motion.section>

            {/* 12. Contact Us */}
            <motion.section variants={itemVariants} id="contact-us">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                If you have any questions, concerns, or disputes regarding these Terms and Conditions, please contact our team:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Email:</strong> <a href="mailto:Khushalisolarenergysolutions@gmail.com" className="text-blue-600 hover:underline">Khushalisolarenergysolutions@gmail.com</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Phone:</strong> <a href="tel:+919691013327" className="text-blue-600 hover:underline">+91 96910 13327</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Address:</strong> Sector-519, Scheme-B71, Gumasta Nagar, Indore, Madhya Pradesh, India</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                These Terms and Conditions were last updated on March 16, 2025.
              </p>
            </motion.section>
          </motion.div>
        </div>
      </div>

      {/* Footer with Navigation */}
      <div className="bg-blue-600 py-6 sm:py-8 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base mb-4">© 2025 Khushali Solar Energy. All rights reserved.</p>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <li className="flex items-center gap-2">
              <HiArrowNarrowRight className="text-white w-5 h-5" />
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <HiArrowNarrowRight className="text-white w-5 h-5" />
              <Link href="/Services" className="hover:text-blue-200">
                Services
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <HiArrowNarrowRight className="text-white w-5 h-5" />
              <Link href="/PrivacyPolicy" className="hover:text-blue-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;