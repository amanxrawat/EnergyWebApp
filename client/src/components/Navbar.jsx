import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                EcoWatt
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
              Contact
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md hover:opacity-90 transition-opacity duration-300"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;