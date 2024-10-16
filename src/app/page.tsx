import { Separator } from "@radix-ui/react-separator";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

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

      <section className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-2xl font-semibold text-center text-neutral-100">
          Under Construction
        </h2>
      </section>
    </main>
  );
}
