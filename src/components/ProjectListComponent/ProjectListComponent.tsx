"use client";
import { useEffect, useState } from "react";
import ProjectComponent from "../ProjectComponent";
import { Project } from "../ProjectComponent/types";
import axios from "axios";
import SectionStartComponent from "../SectionStartComponent";

const ProjectListComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(`data/projects.json`);
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8">
      <SectionStartComponent
        title="Projects"
        description="Here you can find all the projects I have worked on in the past."
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.length > 0 &&
          projects
            .slice(0)
            .reverse()
            .map((project, index) => (
              <ProjectComponent key={index} project={project} />
            ))}
      </div>
    </div>
  );
};

export default ProjectListComponent;
