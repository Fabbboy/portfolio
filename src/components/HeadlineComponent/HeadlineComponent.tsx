type Props = {
  number: number | string;
  topic: string;
};

const HeadlineComponent: React.FC<Props> = ({ number, topic }) => {
  return (
    <div className="text-gray-300 text-left">
      <p className="md:text-3xl text-xl font-semibold text-blue-500 text-left block">
        {number}
      </p>
      <p className="text-md font-semibold text-left block">{topic}</p>
    </div>
  );
};

export default HeadlineComponent;
