import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const milestones = [
    {
      year: "ɢ🔍 2020 Summer",
      title: "Attendee @ Google CSSI",
      description: "Coding workshops & Individual/Group Coding Projects"
    },
    {
      year: "📚 Sept 2020",
      title: "Started at University of Washington 🎓",
      description: "B.S. in Computer Science"
    },
    {
      year: "💻 2022 Summer",
      title: "SWE Intern @ Liberty Mutual Insurance",
      description: "Global Retail Markets Team"
    },
    {
      year: "💻 2023 Summer",
      title: "SWE Intern @ Liberty Mutual Insurance",
      description: "Data & Analytics Team"
    },
    {
      year: "🎓 June 2024",
      title: "Graduated",
      description: "Completed B.S. in CSE"
    },
    {
      year: "💥 Currently",
      title: "Exploring new opportunities",
      description: "Building innovative projects with AI"
    },
  ];

  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const handleClosePopup = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-beige-line to-gray-200 py-20 px-4 md:px-8 lg:px-16" id="about">
      <div className="max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
        >
          my journey.
        </motion.h2>

        <div className="relative w-full flex justify-center">
          <svg
            className="w-full max-w-4xl h-64 md:h-80 lg:h-96"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 350 C150 150, 300 50, 500 200 C700 350, 850 150, 950 350"
              stroke="#5B5D5B"
              strokeWidth="3"
              fill="transparent"
            />
            {milestones.map((milestone, index) => {
              const positions = [
                { x: 230, y: 300 }, 
                { x: 80, y: 200 },
                { x: 320, y: 130 },
                { x: 610, y: 200 },
                { x: 670, y: 315 },
                { x: 870, y: 255 }
              ];

              const { x, y } = positions[index];

              return (
                <g
                  key={index}
                  onClick={() => handleMilestoneClick(milestone)}
                  className="cursor-pointer"
                >
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    fontSize="27"
                    fill="#274C77"
                    fontWeight="bold"
                    className="hover:font-extrabold"
                  >
                    {milestone.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClosePopup}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-xl text-blue-400 font-extrabold mb-2">{selectedMilestone.year}</h3>
              <h4 className="text-lg font-semibold text-gray-700">{selectedMilestone.title}</h4>
              <p className="text-gray-600 mt-2">{selectedMilestone.description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;