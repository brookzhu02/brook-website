import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div
      className="bg-gray-200 py-20 px-4"
      id="projects"
      data-scroll
      data-scroll-speed="1.5"
    >
      <div className="max-w-4xl mx-">
        <h2 className="text-5xl md:text-6xl font-bold font-quicksand mb-6">
          projects.
        </h2>
        <p className="text-lg">
          Currently working on some exciting AI projects! Check back soon for
          updates.
        </p>
      </div>
    </div>
  );
}

export default Project