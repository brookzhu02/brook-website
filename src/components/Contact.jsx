import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-gray-200 to-custom-blue p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 font-quicksand"
      >
        Let's Connect!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
      >
        <motion.a
          href="https://www.linkedin.com/in/brooklynzhu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition space-x-3 w-64"
        >
          <FaLinkedin size={30} />
          <span className="text-lg md:text-xl font-bold">LinkedIn</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:brookzhu02@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition space-x-3 w-64"
        >
          <FaEnvelope size={30} />
          <span className="text-lg md:text-xl font-bold">Email Me</span>
        </motion.a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-gray-700 text-center text-lg md:text-xl"
      >
        Feel free to reach out to me anytime! Whether it's for a chat, a
        collaboration, or an opportunity, I'm excited to connect!
      </motion.p>
    </div>
  );
};

export default Contact;
