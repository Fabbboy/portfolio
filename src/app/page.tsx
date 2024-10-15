import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen p-8 space-y-10">
      <HeaderComponent />
      <HeroComponent />
    </main>
  );
}
