import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full md:w-[70%] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-y-auto  shadow-2xl flex flex-col no-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 z-10 p-2 bg-black/50 hover:bg-orange-600 rounded-full text-white transition-colors duration-300"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            {/* Image Section */}
            <div className="w-full md:h-[200px] overflow-hidden">
              <img
                src={project.image}
                className="w-full h-full object-cover object-top"
                alt={project.name}
              />
            </div>

            {/* Details Section */}
            <div className=" p-8 h-[300px] flex flex-col justify-between">
              <div>
                <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs logo">
                  Featured Project
                </span>
                <h2 className="text-3xl font-bold text-white mb-2 logo">{project.name}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-2 logo text-justify">
                  {project.description}
                </p>

                <div className="mb-2">
                  <h4 className="text-white font-bold mb-3 logo">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300 logo"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center w-[250px] pb-4  my-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] logo shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                >
                  <i className="fa-solid fa-rocket"></i>
                  Live Demo
                </a>
                <button
                   onClick={onClose}
                   className="px-2 py-2 border border-white/10 text-gray-300 hover:bg-white/5 font-bold rounded-xl transition-all duration-300 logo"
                >
                   Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
