import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-white   sm:my-0">

      {/* TOP BANNER */}
      <div
        className="bg-cover bg-center text-center py-16 px-5 relative text-gray-950"
        style={{ backgroundImage: "url('/image5.jpg')" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Free Consultation for Your Solar Energy Needs
        </h2>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Switch to solar and power your home with clean, renewable energy. Get a consultation with our experts today.
        </p>
        <button className="mt-5 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-white font-semibold">
          CONTACT US
        </button>
      </div>

      {/* FOOTER CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 relative">
        <div className="grid md:grid-cols-4  grid-cols-1 gap-8 py-16">
          
          <div className="absolute md:-top-24  -top-32 left-20 bg-gray-800 py-10 px-6 text-white w-72 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold flex items-center">
              <span>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="inline-block mr-2 items-center"
                />
              </span>
              Khushali Solar
            </h2>
            <p className="mt-6 text-md">
              Your trusted solar energy partner for sustainable and cost-effective solutions.
            </p>
            <p className="mt-6 text-sm flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" /> Sector-519 Scheme-B No:71 Gumasta nagar indore
            </p>
            <p className="text-sm mt-3 flex items-center gap-2">
              <FaEnvelope className="text-white" />Khushalisolarenergy<br />solutions@gmail.com
            </p>
            <p className="text-md mt-3 flex items-center gap-3">
              <FaPhone className="text-white" /> (+91) 9691013327
            </p>
          </div>

          {/* Empty div to maintain grid alignment */}
          <div className="md:col-span-1 mt-48 md:mt-0"></div>

          {/* Other Pages */}
          <div className="ml-0 md:ml-20">
            <h3 className="text-lg font-semibold text-white">Other Pages</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/About" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/Services" className="hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="#" className="hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/ContactUs" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="#" className="hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/PrivacyPolicy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/TermsAndCondition" className="hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="/Disclaimer" className="hover:text-blue-500">
                  Disclaimer
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="#" className="hover:text-blue-500">
                  Credits
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <HiArrowNarrowRight className="text-white" />
                <Link href="#" className="hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white">Solar Updates</h3>
            <div className="mt-3 flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 rounded-l-md text-black bg-white w-2/3 focus:outline-none border-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md text-white font-semibold border-l-0">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-sm mt-3">Get the latest news & updates</p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-white bg-blue-500 p-3 rounded-2xl transform hover:scale-125 transition-transform duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-white bg-blue-500 p-3 rounded-2xl transform hover:scale-125 transition-transform duration-300"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-white bg-blue-500 p-3 rounded-2xl transform hover:scale-125 transition-transform duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-white bg-blue-500 rounded-2xl p-3 transform hover:scale-125 transition-transform duration-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;