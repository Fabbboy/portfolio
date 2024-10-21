import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import ProfileComponent from "@/components/ProfileComponent";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/24/solid";

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

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-3xl font-bold text-blue-400">Projects</p>
            <span className="text-blue-200">
              Here you can find all the projects I have worked on in the past.
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center justify-items-center">
            <Card className="bg-neutral-800 border-neutral-700 text-blue-100 rounded-xl shadow-md w-full overflow-hidden">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center space-x-6 w-full">
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-center w-full space-x-8">
                      <span className="text-xl font-semibold text-blue-200 truncate">
                        Mobile App Redesign - Mobile Team
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-blue-600 text-white hover:bg-blue-800 ml-2 whitespace-nowrap"
                      >
                        Ongoing
                      </Badge>
                    </div>
                    <span className="text-sm text-blue-400">
                      UI/UX Designer
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-blue-300">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-sm">2023-09 - 2024-01</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 text-white">Figma</Badge>
                  <Badge className="bg-gray-700 text-white">React Native</Badge>
                  <Badge className="bg-gray-700 text-white">Sketch</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
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
