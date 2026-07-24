import React, { useState } from "react";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import projectData from "../Data/projectData";
export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div
      className="w-full min-h-[640px]  relative boxShadow2
      flex justify-start py-[60px] gap-[30px] sm:gap-[40px] items-center flex-col "
    >
      <h1 className="text-[28px] sm:text-4xl font-bold logo textColor">
        Latest Projects
      </h1>

      <div
        className="w-[170px] sm:w-[230px] h-[1px] bg-gradient-to-t mt-[-12px] from-white
       to-orange-600"
      ></div>
      <div className="w-[100px] h-[1px] bg-gradient-to-t mt-0 sm:mt-[-12px] bg-orange-600"></div>

        <div
        className="w-full lg:max-w-[1300px] min-h-[350px] pt-5 md:pt-10 lg:pt-3 
        flex justify-center items-center gap-16 flex-wrap
          px-5 mt-5"
      >
        {projectData.map((project) => (
          <Project
            key={project.id}
            projectImg={project.image}
            projectName={project.name}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
