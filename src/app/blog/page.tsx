"use client";
import BlogEntryComponent from "@/components/BlogEntryComponent";
import { BlogPost } from "@/components/BlogEntryComponent/types";
import HeaderComponent from "@/components/HeaderComponent";
import SectionStartComponent from "@/components/SectionStartComponent";
import TaskbarComponent from "@/components/TaskbarComponent";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<BlogPost[]>(`data/blogs.json`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.link.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen w-full p-4 md:p-8 space-y-6 md:space-y-10">
      <HeaderComponent pageName="Blog" />
      <div className="space-y-6">
        <SectionStartComponent
          title="Blog"
          description="Welcome to my blog where I share my thoughts on various topics."
        />
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-2xl">
            <SearchIcon className="absolute top-1/2 left-3 w-5 h-5 -translate-y-1/2 text-neutral-400 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-neutral-800 text-neutral-100 rounded-lg shadow-lg border border-neutral-700"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full md:w-1/2 mx-auto">
        {filteredPosts.length > 0 ? (
          filteredPosts
            .slice(0)
            .reverse()
            .map((post, index) => (
              <BlogEntryComponent key={index} blogPost={post} />
            ))
        ) : (
          <p className="text-neutral-400 text-center">No posts found</p>
        )}
      </div>
      <TaskbarComponent />
    </main>
  );
}
