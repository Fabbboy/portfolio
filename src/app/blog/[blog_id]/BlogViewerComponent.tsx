"use client";
import { BASEPATH } from "@/app/globals";
import HeaderComponent from "@/components/HeaderComponent";
import { useState, useEffect } from "react";
import MarkdownComponent from "@/components/MarkdownComponent";

interface BlogContentProps {
  blog_id: string;
}

export function BlogViewerComponent({ blog_id }: BlogContentProps) {
  const [postContent, setPostContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    async function fetchPostContent() {
      const content = await fetch(`${BASEPATH}/blogs/${blog_id}.md`).then(
        (res) => res.text()
      );
      setPostContent(content);

      const firstHeadline = content.match(/^#\s+(.*)|^##\s+(.*)/m);
      if (firstHeadline) {
        setTitle(firstHeadline[1] || firstHeadline[2]);
      } else {
        setTitle("Blog Post");
      }
    }

    fetchPostContent(); 
  }, [blog_id]);  

  return (
    <div className="w-full h-full">
      <HeaderComponent pageName={title} />
      <div className="prose prose-invert prose-lg max-w-none text-gray-300 p-4 md:p-8 space-y-6 md:space-y-10">
        {postContent ? (
          <MarkdownComponent markdown={postContent} />
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </div>
  );
}
