import React from "react";
import { motion } from "framer-motion";


 const timelineData = [
  {
    period: "Dec 2025 – Feb 2026",
    role: "Junior Developer Intern",
    company: "Xenotix Tech",
    details: [
      "Developed responsive web applications using React.js and Next.js.",
      "Worked with Node.js and MongoDB to build RESTful APIs.",
      "Improved application performance and optimized user experience.",
    ],
  },  
  {
    period: "Aug 2025 – Nov 2025",
    role: "Frontend Developer Intern",
    company: "Jaya Graphic Private Limited",
    details: [
      "Built scalable web applications using React.js and Next.js.",
      "Improved website performance and optimized page load speed.",
      "Implemented modern UI components and responsive layouts.",
    ],
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Frontend Developer Intern",
    company: "The Entrepreneurship Network (Limitless Technologies LLP)",
    details: [
      "Developed responsive UI for the PrepAI platform using React.js and Tailwind CSS.",
      "Integrated RESTful APIs to display dynamic data.",
      "Enhanced user experience through optimized UI components.",
    ],
  },
];

const Professional = () => {
  return (
    <div className="min-h-screen  text-gray-100 py-16 px-6 lg:px-24 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-8 h-[1px] bg-orange-600"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-orange-500 uppercase logo">
            EXECUTION LOG
          </span>
          <div className="w-8 h-[1px] bg-orange-600"></div>
        </div>
        <h2 className="text-[28px] sm:text-4xl font-bold logo textColor">
          Professional Timeline
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-7xl w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-900 md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="hidden md:block w-5/12"></div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3  border-2 border-orange-500 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>

              {/* Card */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:border-orange-500/30 transition-all duration-300 group relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="text-sm font-bold text-orange-500 logo">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 logo">{item.role}</h3>
                  <p className="text-orange-400 font-semibold mb-6 logo">
                    {item.company}
                  </p>

                  {item.details ? (
                    <ul className="space-y-3">
                      {item.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-3 text-gray-400 text-sm md:text-base logo">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-600 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed logo">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
