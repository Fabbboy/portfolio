export type PostIcon = "Book" | "Code" | "Tool";
export type BlogPost = {
  title: string;
  icon: PostIcon;
  description: string;
  tags: string[];
  date: string;
  link: string;
};
