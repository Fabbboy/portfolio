type Props = {
  title: string;
};

const TitleComponent: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
      <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default TitleComponent;
