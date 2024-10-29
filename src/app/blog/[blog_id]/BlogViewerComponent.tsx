"use client";
import { BASEPATH } from "@/app/globals";
import HeaderComponent from "@/components/HeaderComponent";
import { useState, useEffect } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface BlogContentProps {
  blog_id: string;
}

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-xl md:text-2xl font-bold text-purple-300 mb-2 md:mb-3">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-lg md:text-xl font-semibold text-purple-400 mt-4 md:mt-5 mb-2 md:mb-3">
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-3 md:mb-4">
      {children}
    </p>
  ),
  a: ({ children, ...props }: { children: React.ReactNode }) => (
    <a
      className="text-teal-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  code({
    inline,
    className,
    children,
  }: {
    inline: boolean;
    className: string;
    children: string;
  }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={okaidia}
        language={match[1]}
        PreTag="div"
        customStyle={{
          backgroundColor: "#282a36",
          color: "#f8f8f2",
          borderRadius: "8px",
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-neutral-700 text-pink-400 rounded px-1 md:px-2">
        {children}
      </code>
    );
  },
};

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
          <ReactMarkdown
            components={components as Partial<Components>}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {postContent}
          </ReactMarkdown>
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </div>
  );
}
