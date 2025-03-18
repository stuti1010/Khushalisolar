"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: 'About' },
  { name: 'Services', href: 'Services' },
  { name: 'Products', href: 'Products' },
  { name: 'Contact', href: 'ContactUs' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-950 to-blue-900 bg-opacity-90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <div className='flex items-center justify-center'>
            <Link href="/" className="flex items-center">
            
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="inline-block mr-2"
              /><span className='text-white text-2xl text-center font-bold'> Khushali Solar
              </span>
            </Link></div>
          </div>

          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-200 hover:scale-105 transform transition-all duration-300 text-lg font-medium relative group"
              >
                {link.name}
                
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-blue-900 bg-opacity-95 backdrop-blur-md">
            <div className="flex flex-col space-y-4 py-4 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-200 text-lg font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;