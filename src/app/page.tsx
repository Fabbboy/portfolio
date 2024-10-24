import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import ProfileComponent from "@/components/ProfileComponent";
import ProjectListComponent from "@/components/ProjectListComponent";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import TitleComponent from "@/components/TitleComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <HeroComponent />

      <div className="space-y-5">
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

        <ProjectListComponent />

        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-3xl font-bold text-blue-400">Skills</p>
          <span className="text-blue-200 text-center">
            Here you can find all the skills I have acquired in the past.
          </span>
        </div>
      </div>
    </main>
  );
}
