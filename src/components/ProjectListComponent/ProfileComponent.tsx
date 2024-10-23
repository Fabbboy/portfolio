"use client";
import { useEffect, useState } from "react";
import ProjectComponent from "../ProjectComponent";
import { Project } from "./types";
import axios from "axios";
import { usePathname } from "next/navigation";

const ProjectListComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.origin);
    console.log(window.location.origin);
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>(`${host}/data/projects.json`);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [host]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-3xl font-bold text-blue-400">Projects</p>
        <span className="text-blue-200 text-center">
          Here you can find all the projects I have worked on in the past.
        </span>
      </div>

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
