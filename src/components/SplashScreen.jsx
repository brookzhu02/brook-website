import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onAnimationEnd }) => {
  const [isClicked, setIsClicked] = useState(false);

  const dropDownVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const doorVariants = {
    closed: { scaleX: 1 },
    open: { scaleX: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const handleEnter = () => {
    setIsClicked(true);
    setTimeout(() => {
      onAnimationEnd();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isClicked && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropDownVariants}
        >
          <motion.div
            className="absolute w-[20%] h-[20%] bg-gray-300 rounded-tr-[40%] shadow-lg top-12 left-16 rotate-[20deg] opacity-80"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[30%] h-[30%] bg-beige-300 rounded-bl-[60%] shadow-lg bottom-20 right-12 -rotate-[15deg] opacity-90"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-[15%] h-[15%] bg-gray-200 rounded-tl-[60%] shadow-lg top-1/3 left-1/3 rotate-[10deg] opacity-85"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div
            className="relative z-10 text-center"
            variants={dropDownVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-sans">
              hi welcome! 👋
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
              step inside and explore 🌟
            </p>
            <motion.button
              onClick={handleEnter}
              className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-700 transition font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter →
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {isClicked && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-100 z-50"
          initial="closed"
          animate="open"
          exit="hidden"
          variants={doorVariants}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <motion.div
            className="w-1/2 h-full bg-neutral-200"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="w-1/2 h-full bg-neutral-300"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
