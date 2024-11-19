import { FaHome, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 h-24">
      <div className="flex items-center">
        <a href="/home" className="hover:text-blue-400 transition">
          <h1 className="text-6xl font-quicksand text-blue-500">brook.</h1>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-quicksand">
        <a href="/home" className="hover:text-blue-500 transition">
          Home
        </a>
        <a href="/projects" className="hover:text-blue-500 transition">
          Projects
        </a>
        <a href="/about" className="hover:text-blue-500 transition">
          About
        </a>
        <a href="/contact" className="hover:text-blue-500 transition">
          Contact
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none hover:text-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 right-6 bg-white shadow-lg rounded-lg w-48 py-4 z-50"
        >
          <a
            href="/home"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
            onClick={toggleMenu}
          >
            <FaHome className="mr-2" />
            Home
          </a>
          <a
            href="/projects"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="/about"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
