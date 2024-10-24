"use client";
import { useEffect, useState } from "react";
import SectionStartComponent from "../SectionStartComponent";
import SkillItemComponent from "../SkillItemComponent";
import axios from "axios";
import { SkillItem } from "../SkillItemComponent/types";

const SkillsListComponent = () => {
  const [projects, setProjects] = useState<SkillItem[]>([]);
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.href);
  }, []);

  const fetchProjects = async () => {
    if (!host) return;
    try {
      const response = await axios.get<SkillItem[]>(`${host}/data/skills.json`);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [host, fetchProjects]);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <SectionStartComponent
        title="Skills"
        description="I have experience with the following technologies"
      />
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        {projects.length > 0 &&
          projects.map((skillItem, index) => (
            <SkillItemComponent key={index} skillItem={skillItem} />
          ))}
      </div>
    </div>
  );
};

export default SkillsListComponent;
