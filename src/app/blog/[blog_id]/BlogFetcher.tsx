"use client";
import { useState, useEffect } from "react";

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

  return <p>{postContent || "Loading content..."}</p>;
}
