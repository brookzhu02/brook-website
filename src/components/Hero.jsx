import { motion } from "framer-motion";
import headshot from "../assets/Brooklyn.jpg";
import { FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const Hero = ({ scrollToAbout }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const waveVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 15, -10, 15, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center text-gray-800 dark:text-gray-200 p-6 bg-gradient-to-b from-gray-100 via-blue-300 to-gray-200 min-h-screen"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative aspect-square w-48 md:w-64 lg:w-80 xl:w-96 group mb-2"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-300 rounded-full blur-xl"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full transform transition duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-105"
        >
          <defs>
            <clipPath id="svgMask">
              <path d="M498.523 246.291c37.941-67.923-8.514-149.499-85.88-157.204l-28.232-2.813c-20.59-2.053-38.982-10.974-54.263-28.128-53.185-59.695-152.219-44.954-184.82 26.764-7.94 17.466-22.298 31.438-40.428 39.344l-39.773 17.34c-63.399 27.64-84.894 104.334-44.848 159.183l25.236 34.563c5.481 7.508 9.482 15.807 11.893 24.666l12.532 46.073c17.167 63.115 88.755 97.22 151.241 70.693l5.35-2.271c15.901-6.751 33.992-8.387 50.932-4.616l82.048 18.269c79.933 17.798 150.39-51.574 132.54-127.825l-10.384-44.351c-4.203-17.953-1.524-36.78 7.544-53.012l9.312-16.675z" />
            </clipPath>
          </defs>
          <image
            href={headshot}
            width="512"
            height="512"
            clipPath="url(#svgMask)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mb-2 flex items-center"
      >
        <motion.span
          className="mr-3 text-4xl"
          variants={waveVariants}
          initial="hidden"
          animate="visible"
        >
          👋
        </motion.span>
        Hi! I’m Brooklyn
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 mt-2 text-center"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600">
            🎓: University of Washington
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            B.S. Computer Science, 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 lg:mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-6 py-3 bg-gray-600 text-white font-medium rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            About Me
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/brooklynzhu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:brookzhu02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-900 transition"
          >
            <FaFilePdf />
            <span>Resume</span>
          </motion.a>
      </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-xl mr-5 md:text-2xl font-medium text-gray-600">
            currently:
          </h2>
          <p className="text-lg md:text-xl text-blue-500">
            learning and building with AI! open to new opportunities!
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600">
            interests 🌟
          </h2>
          <p className="text-lg md:text-xl text-blue-500">
            AI, HCI, data visualization, fintech, economics
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600">
            hobbies 💡
          </h2>
          <p className="text-lg md:text-xl lg:mb-10 text-blue-500">
            skydiving, eating, traveling, watching crime shows
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;