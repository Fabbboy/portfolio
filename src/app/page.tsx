import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import TerminalComponent from "@/components/TerminalComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <HeroComponent />

      <Separator
        orientation="horizontal"
        className="w-full flex justify-center items-center"
      >
        <div className="w-32 h-1 bg-blue-600 rounded-full"></div>
      </Separator>

      <div className="flex flex-col items-center justify-center w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-neutral-100">
          Explore My Work
        </h2>
        <p className="text-lg text-center text-neutral-300 max-w-2xl">
          Use the terminal to dive deeper into my projects and experience.
          Prefer a traditional approach? No worries, you can also explore
          everything without using the terminal.
        </p>
        <TerminalComponent />
      </div>
    </main>
  );
}
