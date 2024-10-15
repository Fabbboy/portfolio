import { Button } from "../ui/button";

const HeaderComponent = () => {
  return (
    <header className="w-full bg-neutral-800 text-neutral-100 p-4 rounded-xl shadow-md">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
          <h1 className="text-xl font-semibold">Portfolio</h1>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300"
        >
          <span>Get in Touch</span>
        </Button>
      </nav>
    </header>
  );
};

export default HeaderComponent;
