import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../ui/button";

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
        <Button
          variant="secondary"
          size="lg"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>Get in Touch</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          <ArrowDownIcon className="w-6 h-6" />
          <span>Learn More</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroComponent;
