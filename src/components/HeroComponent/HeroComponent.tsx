"use client";
import { ClipboardIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-6 px-4">
      <Image
        className="w-36 h-36 md:w-48 md:h-48 rounded-full"
        src="/imoji.jpg"
        alt="Avatar"
        width={144}
        height={144}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-100">
        Hi there! 👋 Welcome on my Portfolio!
      </h1>
      <div className="text-lg text-center text-neutral-200">
        Application Developer apprentice working at
        <span className="inline-block mx-1">
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-800"
          >
            Swisscom AG
          </Badge>
        </span>
        in the
        <span className="inline-block mx-1">
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-800"
          >
            Appsteam
          </Badge>
        </span>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <Button
          variant="secondary"
          size="lg"
          className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 w-full md:w-auto"
          onClick={() => window.open("mailto:fabrice.schaub@swisscom.com")}
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>Get in Touch</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 w-full md:w-auto"
        >
          <ClipboardIcon className="w-6 h-6" />
          <span>Download CV</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroComponent;
