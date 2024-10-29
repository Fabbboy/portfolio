import { BlogContentFetcher } from "./BlogFetcher";

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
    <div>
      <BlogContentFetcher blog_id={blog_id} />
    </div>
  );
}
