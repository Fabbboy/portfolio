import { Book, CodeIcon, WrenchIcon } from "lucide-react";
import { BlogPost, PostIcon } from "./types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import moment from "moment";
import Link from "next/link";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

type BlogEntryComponentProps = {
  blogPost: BlogPost;
};

const BlogIconMap: Record<PostIcon, React.ReactElement> = {
  Book: <Book className="w-7 h-7 text-white" />,
  Code: <CodeIcon className="w-7 h-7 text-white" />,
  Tool: <WrenchIcon className="w-7 h-7 text-white" />,
};

const BlogEntryComponent: React.FC<BlogEntryComponentProps> = ({
  blogPost,
}) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 space-y-3 ">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 p-1.5 rounded-full">
          {BlogIconMap[blogPost.icon] ?? <QuestionMarkCircleIcon className="w-7 h-7 text-white" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{blogPost.title}</h3>
          <p className="text-xs text-neutral-400">
            {moment(blogPost.date, "YYYY-MM-DD:HH:mm:ss").fromNow()}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-neutral-300 text-md line-clamp-2">
          {blogPost.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {blogPost.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-neutral-700 text-neutral-300 text-xs px-2 py-1 hover:bg-neutral-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={blogPost.link}>
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-neutral-700 text-sm bg-neutral-800"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogEntryComponent;
