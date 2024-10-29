"use client";
import { useEffect, useState } from "react";
import SectionStartComponent from "../SectionStartComponent";
import SkillItemComponent from "../SkillItemComponent";
import axios from "axios";
import { SkillItem } from "../SkillItemComponent/types";
import { BASEPATH } from "@/app/globals";

const SkillsListComponent = () => {
  const [projects, setProjects] = useState<SkillItem[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<SkillItem[]>(
          `${BASEPATH}/data/skills.json`
        );
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

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
