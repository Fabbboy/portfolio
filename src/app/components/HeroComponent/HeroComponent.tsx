import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-2">
      <Image
        className="w-32 h-32 rounded-full"
        src="https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill"
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
      <div className="space-y-10">
        <div className="flex space-x-4"></div>
      </div>
    </div>
  );
};

export default HeroComponent;
