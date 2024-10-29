"use client";
import HeaderComponent from "@/components/HeaderComponent";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  blog_id: string;
}

export function BlogViewerComponent({ blog_id }: BlogContentProps) {
  const [postContent, setPostContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    async function fetchPostContent() {
      const content = await fetch(`/blogs/${blog_id}.md`).then((res) =>
        res.text()
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
      <div className="w-full h-full p-4 md:p-8 space-y-6 md:space-y-10 text-neutral-100">
        {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
        {postContent ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {postContent}
          </ReactMarkdown>
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </div>
  );
}
