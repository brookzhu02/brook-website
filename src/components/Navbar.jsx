import { FaHome, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToHome, scrollToProjects, scrollToAbout, scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 h-24">
      <div className="flex items-center">
        <button
          onClick={scrollToHome}
          className="hover:text-blue-400 transition"
        >
          <h1 className="text-6xl font-quicksand text-gray-600">brook.</h1>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-quicksand">
        <button onClick={scrollToHome} className="hover:text-blue-500 transition">
          Home
        </button>
        <button onClick={scrollToAbout} className="hover:text-blue-500 transition">
          About
        </button>
        <button onClick={scrollToProjects} className="hover:text-blue-500 transition">
          Projects
        </button>
        <button onClick={scrollToContact} className="hover:text-blue-500 transition">
          Contact
        </button>
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
          <button
            onClick={() => {
              scrollToHome();
              toggleMenu();
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </button>
          <button
            onClick={() => {
              scrollToAbout();
              toggleMenu();
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToProjects();
              toggleMenu();
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToContact();
              toggleMenu();
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition flex items-center"
          >
            Contact
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;