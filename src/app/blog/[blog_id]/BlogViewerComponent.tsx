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
    <h1 className="text-3xl font-bold text-blue-400 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-blue-300 mt-6 mb-4">
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-md text-neutral-200 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ children, ...props }: { children: React.ReactNode }) => (
    <a
      className="text-blue-400 hover:underline"
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
          backgroundColor: "transparent",
          padding: "1em",
          borderRadius: "8px",
          margin: "1em 0",
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-neutral-800 text-blue-200 rounded px-1">
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
