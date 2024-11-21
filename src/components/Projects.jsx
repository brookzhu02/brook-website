import { motion } from "framer-motion";
import { useState } from "react";
import lemmeknow from "../assets/lemmeknow.png";
import dog2 from "../assets/dog2.jpg";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "LemmeKnow",
      slogan: "Plan smarter, connect faster.",
      description:
        "LemmeKnow is a tool that simplifies group activity planning by allowing users to communicate, organize, and share availability seamlessly. Features include direct messaging, creating groups, and more.",
      details:
        "Built using SvelteKit, Go, and DynamoDB. Developed as part of a team of 4 during a 10-week software engineering course.",
      image: lemmeknow,
      github: "https://github.com/cse403-lemmeknow/lemmeknow/commits/main/",
      demo: "https://lemmeknow.xyz",
      technologies: ["SvelteKit", "Go", "DynamoDB", "JavaScript"],
    },
    {
      title: "building!!",
      slogan: "Exciting AI Projects coming soon.",
      description: "Work in Progress...",
      details:
        "Currently working on some fun & exciting AI projects! Stay tuned for updates.",
      image: dog2,
      github: "https://github.com/brookzhu02/brook-website",
      demo: "https://www.youtube.com/shorts/z8EuI5bobe8",
      technologies: ["dogz!!", "dogs!!", "doggos!!!"],
    },
  ];

  return (
    <div
      className="bg-gray-200 py-20 px-4"
      id="projects"
      data-scroll
      data-scroll-speed="1.5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-quicksand mb-10">
          projects.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-light-blue bg-opacity-90 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4"
              >
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="italic text-sm mb-4">{project.slogan}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-sky-900 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline text-lg"
                >
                  DEMO
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-800 mb-4">{selectedProject.description}</p>
            <p className="text-gray-700 text-sm">{selectedProject.details}</p>
            <div className="mt-4 flex items-center space-x-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View on GitHub
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Demo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-start gap-2">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-200 text-blue-900 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;