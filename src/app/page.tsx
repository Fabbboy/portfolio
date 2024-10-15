import { Card, CardTitle } from "@/components/ui/card";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import TitleComponent from "@/components/TitleComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <HeroComponent />
      <Card className="w-full bg-neutral-800 border-neutral-700 text-blue-100 p-4 rounded-xl shadow-md">
        <CardTitle className="text-xl font-semibold">
          <TitleComponent title="Skills" />
        </CardTitle>
      </Card>
    </main>
  );
}
