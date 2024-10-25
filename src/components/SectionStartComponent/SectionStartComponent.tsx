type Props = {
  title: string;
  description: string;
};

const SectionStartComponent: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-4 p-4 md:p-8">
        <p className="text-2xl md:text-4xl font-bold text-blue-400 text-center">
          {title}
        </p>
        <span className="text-blue-200 text-center text-base md:text-lg max-w-screen-md">
          {description}
        </span>
      </div>
    </div>
  );
};

export default SectionStartComponent;
