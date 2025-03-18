'use client';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';

const PrivacyPolicy = () => {
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

  return (
    <div className="container mx-auto bg-blue-50 overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-tl from-blue-600 mt-11 via-blue-400 to-blue-700 text-white py-12 sm:py-16 md:py-20">
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
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            >
              Khushali Solar Energy is committed to protecting your privacy. This policy outlines our practices for handling your personal information.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="relative">
          {/* Decorative Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 hidden lg:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto lg:ml-12 space-y-10 sm:space-y-12"
          >
            {/* Introduction */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                1. Introduction
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Khushali Solar Energy (&ldquo;we&rldquo;,&ldquo;us&rldquo; or &ldquo;our&rldquo;) values your privacy and is dedicated to ensuring the security of your personal information. As a leading provider of solar panels, wind turbines, and renewable energy solutions, we collect and process data to deliver exceptional products and services. This Privacy Policy explains how we collect, use, disclose, and protect your information in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant regulations.
              </p>
            </motion.section>

            {/* Scope and Consent */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                2. Scope and Consent
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                This Privacy Policy applies to all personal data collected through our website (www.khushalisolar.com), mobile applications, customer support interactions, and any other services provided by Khushali Solar Energy. By accessing or using our services, you consent to the practices described in this policy. If you do not agree with these terms, please refrain from using our services.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                3. Information We Collect
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
                We collect the following types of information to provide and improve our renewable energy products and services:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Personal Identification Information:</strong> Full name, email address, phone number, billing address, and shipping address when you purchase solar panels, wind turbines, or request a consultation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Payment Information:</strong> Credit card details, bank account information, or other payment methods used for transactions, securely processed through third-party payment gateways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Technical Data:</strong> IP address, browser type, operating system, device identifiers, and browsing behavior collected through cookies and similar technologies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Energy Consumption Data:</strong> Information about your energy usage, property size, and renewable energy preferences to design tailored solar or wind energy solutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Communications Data:</strong> Records of your interactions with our customer support team, including emails, phone calls, and live chat transcripts.</span>
                </li>
              </ul>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                4. How We Use Your Information
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
                We use your information for the following purposes:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Service Delivery:</strong> To process orders, deliver solar panels and wind turbines, and provide installation and maintenance services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Customer Support:</strong> To respond to your inquiries, provide technical support, and resolve issues related to our products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Marketing and Communications:</strong> To send you promotional emails, newsletters, and updates about our renewable energy products (you may opt-out at any time).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Analytics and Improvement:</strong> To analyze website usage, improve our services, and enhance user experience through aggregated data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Legal Compliance:</strong> To comply with legal obligations, such as tax reporting, fraud prevention, and responding to lawful requests from authorities.</span>
                </li>
              </ul>
            </motion.section>

            {/* Data Sharing and Disclosure */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                5. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
                We may share your information in the following circumstances:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Service Providers:</strong> With trusted third-party vendors (e.g., payment processors, shipping companies, and installation partners) who assist in delivering our products and services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Legal Requirements:</strong> When required by law, such as in response to a court order, subpoena, or government investigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction, with appropriate safeguards in place.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>With Your Consent:</strong> We may share your information for other purposes if you provide explicit consent.</span>
                </li>
              </ul>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                6. Data Security
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We implement robust security measures to protect your personal information, including:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Encryption of sensitive data using Secure Sockets Layer (SSL) technology during transmission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Regular security audits and vulnerability assessments to identify and mitigate risks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Access controls to ensure only authorized personnel can access your data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Employee training on data protection best practices to prevent unauthorized disclosure.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                Despite our efforts, no system can be completely secure. In the unlikely event of a data breach, we will notify affected users promptly as required by law.
              </p>
            </motion.section>

            {/* Data Retention */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                7. Data Retention
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. For example:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Customer data related to purchases is retained for 7 years to comply with tax and financial regulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Marketing data is retained until you unsubscribe or request deletion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Technical data is anonymized and retained for up to 12 months for analytics purposes.</span>
                </li>
              </ul>
            </motion.section>

            {/* Cookies and Tracking Technologies */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our website. These include:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Essential Cookies:</strong> Necessary for website functionality, such as remembering your login details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Analytics Cookies:</strong> Used to track website usage and performance through tools like Google Analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Marketing Cookies:</strong> Used to deliver personalized ads based on your interests.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                You can manage your cookie preferences through your browser settings or our cookie consent popup. For more details, please refer to our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
              </p>
            </motion.section>

            {/* Your Rights */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                9. Your Rights
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">
                Under applicable data protection laws, you have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Erasure:</strong> Request deletion of your data under certain circumstances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Restrict Processing:</strong> Limit how we use your data in specific situations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Data Portability:</strong> Request a transferable copy of your data in a machine-readable format.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Right to Object:</strong> Object to processing for direct marketing or other purposes based on legitimate interests.</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
                To exercise these rights, please contact our Data Protection Officer at <a href="mailto:privacy@khushalisolar.com" className="text-blue-600 hover:underline">privacy@khushalisolar.com</a>.
              </p>
            </motion.section>

            {/* International Data Transfers */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                As a global provider of renewable energy solutions, Khushali Solar Energy may transfer your data to countries outside your jurisdiction, including to our service providers in the United States, European Union, or other regions. We ensure that such transfers comply with data protection laws by implementing safeguards such as Standard Contractual Clauses (SCCs) and ensuring that recipients adhere to equivalent privacy standards.
              </p>
            </motion.section>

            {/* Changes to This Policy */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make significant changes, we will notify you via email or a prominent notice on our website at least 30 days before the changes take effect. We encourage you to review this policy regularly to stay informed. This policy was last updated on March 16, 2025.
              </p>
            </motion.section>

            {/* Contact Us */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0"></span>
                12. Contact Us
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
              </p>
              <ul className="text-gray-700 text-base sm:text-lg space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Email:</strong> <a href="mailto:privacy@khushalisolar.com" className="text-blue-600 hover:underline">privacy@khushalisolar.com</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Phone:</strong> <a href="tel:+919691013327" className="text-blue-600 hover:underline">+91 96910 13327</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">→</span>
                  <span><strong>Address:</strong> Sector-519, Scheme-B71, Gumasta Nagar, Indore, Madhya Pradesh, India</span>
                </li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                If you are not satisfied with our response, you may lodge a complaint with your local data protection authority.
              </p>
            </motion.section>
          </motion.div>
        </div>
      </div>

      {/* Footer with Navigation */}
      <div className="bg-blue-600 py-6 sm:py-8  text-center text-white">
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
              <Link href="/TermsAndCondition" className="hover:text-blue-200">
                Terms&Condition
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;