import { BlogViewerComponent } from "./BlogViewerComponent";
import TaskbarComponent from "@/components/TaskbarComponent";

interface BlogPageProps {
  params: {
    blog_id: string;
  };
}

export async function generateStaticParams() {
  const blogs = [{ blog_id: "curated-list-of-projects" }];
  return blogs.map((blog) => ({
    blog_id: blog.blog_id,
  }));
}

export default function SelectedBlogPage({ params }: BlogPageProps) {
  const { blog_id } = params;

  return (
    <div className="flex flex-col min-h-screen w-full p-4 md:p-8 space-y-6 md:space-y-10">
      <BlogViewerComponent blog_id={blog_id} />
      <TaskbarComponent />
    </div>
  );
}
