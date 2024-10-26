export type ProjectStatus = "Ongoing" | "Completed" | "Planed" | "Canceled";

export const projectStatusMap: Record<ProjectStatus, string> = {
  Ongoing: "bg-blue-600 text-white hover:bg-blue-800",
  Completed: "bg-green-600 text-white hover:bg-green-800",
  Planed: "bg-yellow-600 text-white hover:bg-yellow-800",
  Canceled: "bg-red-600 text-white hover:bg-red-800",
};

export interface Project {
  title: string;
  role: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  owner: string;
  tags: string[];
}
