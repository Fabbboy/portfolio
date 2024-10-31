"use client";
import HeaderComponent from "@/components/HeaderComponent";
import TaskbarComponent from "@/components/TaskbarComponent";
import { useEffect, useState } from "react";
import { BASEPATH } from "../globals";
import MarkdownComponent from "@/components/MarkdownComponent";

const ImprintPage = () => {
  const [impressumContent, setImpressumContent] = useState<string>("");

  useEffect(() => {
    async function fetchPostContent() {
      const content = await fetch(`${BASEPATH}/imprint.md`).then((res) =>
        res.text()
      );
      setImpressumContent(content);
    }

    fetchPostContent();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <HeaderComponent pageName="Impressum" />
      <div className="prose prose-invert prose-lg max-w-none text-gray-300 p-4 md:p-8 space-y-6 md:space-y-10">
        {impressumContent ? (
          <MarkdownComponent markdown={impressumContent} />
        ) : (
          <p>Loading content...</p>
        )}
      </div>
      <TaskbarComponent />
    </div>
  );
};

export default ImprintPage;
