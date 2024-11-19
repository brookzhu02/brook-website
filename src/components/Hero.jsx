import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import headshot from "../assets/Brooklyn.jpg";
import emoji from "../assets/emoji.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-gray-800 dark:text-gray-200 p-4"
    >
      <div className="w-full bg-yellow-100 text-black text-center py-2 px-4 font-bold shadow-md">
        🚧 This website is still under construction! 🚀 Stay tuned for updates.
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative aspect-square w-48 md:w-64 lg:w-80 xl:w-96 group mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full transform transition duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-140"
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
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 flex items-center font-quicksand"
      >
        <img
          src={emoji}
          alt="emoji"
          className="w-15 h-10 md:w-30 md:h-20 lg:w-35 lg:h-35 mr-3"
        />
        hi! i'm brooklyn
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex items-center font-quicksand text-sky-500"
      >
        🎓: University of Washington B.S. Computer Science 2024
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl md:text-2xl lg:text-3xl mb-4 flex items-center font-calibri"
      >
        <span className="text-black font-bold mr-2">currently: </span>
        <span className="text-black">learning and building with AI!</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl mb-4 flex items-center font-calibri"
      >
        <span className="text-black font-bold mr-2">interests:</span>
        <span className="text-black">AI, HCI, data vis, fintech, economics</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xl md:text-2xl lg:text-3xl mb-4 font-calibri flex items-center"
      >
        <span className="text-black font-bold mr-2">hobbies:</span>
        <span className="text-black">
          skydiving, eating, traveling, watching elementary
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap justify-center space-x-4 mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/about")}
          className="px-6 py-3 bg-sky-400 text-white font-bold rounded-md shadow-lg hover:bg-sky-600 transition"
        >
          About Me
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/brooklynzhu"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg flex items-center space-x-2 hover:bg-gray-700 transition"
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
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-md shadow-lg flex items-center space-x-2 hover:bg-green-600 transition"
        >
          <FaEnvelope />
          <span>Email Me</span>
        </motion.a>
      </motion.div>

      <div className="mt-16 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-sky-500 text-center"
        >
          <span className="text-lg md:text-xl font-quicksand">
            Made with ❤️ by Brooklyn
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
