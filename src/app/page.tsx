import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import ProfileComponent from "@/components/ProfileComponent";
import { Badge } from "@/components/ui/badge";

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

        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="flex flex-col justify-center items-center space-y-2">
            <h2 className="text-4xl text-blue-100">Projects</h2>
            <div className="text-blue-200 text-center">
              Here is a list of all the Projects I have worked on within{" "}
              <Badge
                variant="secondary"
                className="bg-blue-600 text-white hover:bg-blue-800"
              >
                Swisscom
              </Badge>
            </div>
          </div>
          {/* Here */}
        </div>

        <Separator
          orientation="horizontal"
          className="w-full flex justify-center items-center"
        >
          <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
        </Separator>
      </div>
    </main>
  );
}
