type Props = {
  title: string;
};

const TitleComponent: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default TitleComponent;
