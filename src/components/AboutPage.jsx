import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    category: "FRONTEND",
    icon: <i className="fa-brands fa-react text-2xl text-orange-500"></i>,
  },
  {
    name: "Next.js",
    category: "FRAMEWORK",
    icon: <span className="text-2xl font-bold text-orange-500">N</span>,
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    icon: <i className="fa-brands fa-js text-2xl text-orange-500"></i>,
  },
  {
    name: "Redux",
    category: "STATE TOOL",
    icon: <span className="text-2xl font-bold text-orange-500">R</span>,
  },
  {
    name: "HTML/CSS",
    category: "CORE",
    icon: <i className="fa-solid fa-layer-group text-2xl text-orange-500"></i>,
  },
  {
    name: "Node.js",
    category: "LEARNING",
    icon: <i className="fa-solid fa-gear text-2xl text-orange-500 animate-spin-slow"></i>,
    isLearning: true,
  },
   {
    name: "Express.js",
    category: "LEARNING",
    icon: <i className="fa-solid fa-gear text-2xl text-orange-500 animate-spin-slow"></i>,
    isLearning: true,
  },
   {
    name: "MongoDB",
    category: "LEARNING",
    icon: <i className="fa-solid fa-gear text-2xl text-orange-500 animate-spin-slow"></i>,
    isLearning: true,
  },
    {
    name: "Sass",
    category: "LEARNING",
    icon: <i className="fa-solid fa-gear text-2xl text-orange-500 animate-spin-slow"></i>,
    isLearning: true,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen  text-gray-100 py-16 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-orange-600"></div>
            <h2 className="text-[28px] sm:text-4xl font-bold tracking-tight logo textColor">
              Technical Arsenal
            </h2>
          </div>

          <div className="space-y-6 logo text-gray-400 text-lg md:text-xl leading-relaxed">
            <p>
              I build responsive and scalable frontend applications using modern web technologies. My main focus is the React ecosystem, where I enjoy creating clean UI and reusable components.
            </p>
            <p>
              I have worked on projects like a portfolio website, movie app, and sales management dashboard, where I implemented API integration and state management.
            </p>
            <p>
              Currently, I am learning backend technologies to strengthen my understanding of full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 logo">
            <span className="px-6 py-2 rounded-full border border-orange-600/30 bg-orange-600/10 text-orange-500 text-sm font-bold tracking-widest uppercase hover:bg-orange-600/20 transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.1)]">
              SYSTEM THINKER
            </span>
            <span className="px-6 py-2 rounded-full border border-orange-600/30 bg-orange-600/10 text-orange-500 text-sm font-bold tracking-widest uppercase hover:bg-orange-600/20 transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.1)]">
              PIXEL PERFECTIONIST
            </span>
          </div>
        </motion.div>

        {/* Right Section: Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className={`relative logo cursor-pointer flex flex-col items-center justify-center p-8 rounded-2xl border ${
                skill.isLearning
                  ? "border-orange-500/50 shadow-[0_0_20px_rgba(234,88,12,0.2)]"
                  : "border-white/5 bg-white/5"
              } hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 group`}
            >
              <div className="mb-4 p-4 rounded-xl /40 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100 group-hover:text-orange-500 transition-colors">
                {skill.name}
              </h3>
              <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">
                {skill.category}
              </p>
              
              {skill.isLearning && (
                <div className="absolute inset-0 rounded-2xl border border-orange-500/20 animate-pulse pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
