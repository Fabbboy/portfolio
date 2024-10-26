import HeaderComponent from "@/components/HeaderComponent";
import TaskbarComponent from "@/components/TaskbarComponent";

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <TaskbarComponent />
    </main>
  );
}
