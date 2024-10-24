import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import ProfileComponent from "@/components/ProfileComponent";
import ProjectListComponent from "@/components/ProjectListComponent";
import SkillsListComponent from "@/components/SkillsListComponent";
import SectionStartComponent from "@/components/SectionStartComponent";
import TaskbarComponent from "@/components/TaskbarComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <HeroComponent />

      <div className="space-y-8">
        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>

        <ProfileComponent />

        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>

        <SkillsListComponent />
        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>

        <ProjectListComponent />

        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>

        <div className="flex flex-col items-center justify-center px-4">
          <SectionStartComponent
            title="Testimonials"
            description="Here you can find some testimonials from people I have worked with."
          />
        </div>
        <TaskbarComponent />
      </div>
    </main>
  );
}
