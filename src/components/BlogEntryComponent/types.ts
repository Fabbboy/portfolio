export type PostIcon = "Book" | "Code" | "Invalid";
export type BlogPost = {
  title: string;
  icon: PostIcon;
  description: string;
  tags: string[];
  date: string;
  link: string;
};
