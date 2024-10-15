import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-11 space-y-10">
      <HeaderComponent />
      <HeroComponent />

      <div className="fixed bottom-0 left-0 w-full p-11 flex justify-center">
        <div className="bg-neutral-800 text-neutral-100 p-4 flex justify-around items-center rounded-lg min-w-[300px] min-h-[60px]">
          <button className="p-2 bg-neutral-700 rounded hover:bg-neutral-600">
            Home
          </button>
          <button className="p-2 bg-neutral-700 rounded hover:bg-neutral-600">
            Projects
          </button>
          <button className="p-2 bg-neutral-700 rounded hover:bg-neutral-600">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}
