type Props = {
  title: string;
  description: string;
};

const SectionStartComponent: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-3xl font-bold text-blue-400">{title}</p>
      <span className="text-blue-200 text-center">{description}</span>
    </div>
  );
};

export default SectionStartComponent;
