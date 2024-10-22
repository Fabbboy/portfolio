export type ProjectStatus = "Ongoing" | "Completed" | "Paused" | "Canceled";

export const projectStatusMap: Record<ProjectStatus, string> = {
  Ongoing: "bg-blue-600 text-white",
  Completed: "bg-green-600 text-white",
  Paused: "bg-yellow-500 text-white",
  Canceled: "bg-red-600 text-white",
};

export interface Project {
  title: string;
  role: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  tags: string[];
}
