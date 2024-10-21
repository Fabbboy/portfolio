type Props = {
  number: number | string;
  topic: string;
};

const HeadlineComponent: React.FC<Props> = ({ number, topic }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-blue-400">{number}</span>
      <span className="text-gray-400">{topic}</span>
    </div>
  );
};

export default HeadlineComponent;
