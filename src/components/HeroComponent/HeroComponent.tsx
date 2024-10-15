import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
      <Image
        className="w-48 h-48 rounded-full"
        src="imoji.jpeg"
        alt="Avatar"
        width={144}
        height={144}
      />
      <h1 className="text-4xl font-bold text-center text-neutral-100">
        Hi there! 👋 Welcome on my Portfolio!
      </h1>
      <p className="text-lg text-center text-neutral-200">
        Glad to see you here! Feel free to explore my projects and learn more.
      </p>
      <div className="flex space-x-4 mt-6">
        {/* Solid Button */}
        <button className="flex items-center justify-center w-48 h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg shadow-md transition duration-300 px-4 py-2">
          <span className="mr-2">Explore Projects</span>
          <ArrowDownIcon className="h-5 w-5 text-white" />
        </button>

        {/* Outlined Button */}
        <button className="flex items-center justify-center w-48 h-14 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 px-4 py-2">
          <span className="mr-2">Contact Me</span>
          <EnvelopeIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
