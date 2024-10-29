"use client";
import { BASEPATH } from "@/app/globals";
import HeaderComponent from "@/components/HeaderComponent";
import { useState, useEffect } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ReactNode, ComponentPropsWithoutRef } from "react";

interface BlogContentProps {
  blog_id: string;
}

type MarkdownComponentProps = {
  children: ReactNode;
  inline?: boolean;
  className?: string;
};

const components: Partial<{
  [key in keyof JSX.IntrinsicElements]: React.ComponentType<MarkdownComponentProps>;
}> = {
  h1: ({ children, ...props }: MarkdownComponentProps) => (
    <h1 className="text-3xl font-bold text-blue-400 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MarkdownComponentProps) => (
    <h2 className="text-2xl font-semibold text-blue-300 mt-6 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MarkdownComponentProps) => (
    <h3 className="text-xl font-medium text-blue-200 mt-4 mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MarkdownComponentProps) => (
    <p className="text-md text-neutral-200 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-blue-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: MarkdownComponentProps) => (
    <ul className="list-disc ml-5 space-y-2 text-neutral-200" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MarkdownComponentProps) => (
    <ol className="list-decimal ml-5 space-y-2 text-neutral-200" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MarkdownComponentProps) => (
    <li className="text-md leading-6" {...props}>
      {children}
    </li>
  ),
  code: ({ inline, className, children, ...props }: MarkdownComponentProps) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline ? (
      <pre className="bg-neutral-800 rounded-lg p-4 overflow-auto mb-4">
        <code
          className={`language-${match ? match[1] : ""} text-blue-200`}
          {...props}
        >
          {children}
        </code>
      </pre>
    ) : (
      <code className="bg-neutral-800 text-blue-200 rounded px-1" {...props}>
        {children}
      </code>
    );
  },
  blockquote: ({ children, ...props }: MarkdownComponentProps) => (
    <blockquote
      className="border-l-4 border-blue-600 pl-4 italic text-neutral-300 my-4"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-neutral-600 my-8" />,
  img: ({ ...props }: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="rounded-lg mx-auto max-w-full h-auto mb-4" {...props} />
  ),
  table: ({ children, ...props }: MarkdownComponentProps) => (
    <div className="overflow-x-auto my-4" {...props}>
      <table className="min-w-full border-collapse bg-neutral-800 text-neutral-200">
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: MarkdownComponentProps) => (
    <th
      className="border-b border-neutral-700 px-4 py-2 font-semibold text-left bg-neutral-700"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: MarkdownComponentProps) => (
    <td className="border-b border-neutral-700 px-4 py-2 text-left" {...props}>
      {children}
    </td>
  ),
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
      <div className="w-full h-full p-4 md:p-8 space-y-6 md:space-y-10 text-neutral-100">
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
