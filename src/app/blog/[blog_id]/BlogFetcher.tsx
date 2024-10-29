"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogContentFetcherProps {
  blog_id: string;
}

export function BlogContentFetcher({ blog_id }: BlogContentFetcherProps) {
  const [postContent, setPostContent] = useState<string>("");

  useEffect(() => {
    async function fetchPostContent() {
      const content = await fetch(`/blogs/${blog_id}.md`).then((res) =>
        res.text()
      );
      setPostContent(content);
    }

    fetchPostContent();
  }, [blog_id]);

  return (
    <div className="w-full h-full p-4 md:p-8 space-y-6 md:space-y-10 justify-start items-start text-neutral-100">
      {postContent ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{postContent}</ReactMarkdown>
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
}
