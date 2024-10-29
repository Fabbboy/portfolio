import HeaderComponent from "@/components/HeaderComponent";
import SectionStartComponent from "@/components/SectionStartComponent";
import TaskbarComponent from "@/components/TaskbarComponent";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function BlogPage() {
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
              className="w-full pl-10 pr-4 py-2 bg-neutral-800 text-neutral-100 rounded-lg shadow-lg border border-neutral-700"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6"></div>
      <TaskbarComponent />
    </main>
  );
}
