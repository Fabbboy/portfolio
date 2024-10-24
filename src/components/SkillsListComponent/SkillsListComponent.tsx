import SectionStartComponent from "../SectionStartComponent";

type Props = {
  name: string;
  icon: string;
};

const SkillItemComponent: React.FC<Props> = ({ name, icon }) => {
  return (
    <div className="flex flex-row items-center justify-center min-w-32 max-h-24 p-4 bg-neutral-800 border border-neutral-700 rounded-lg space-x-4">
      <div className="flex flex-col items-center justify-center">
        <img src={icon} className="w-8 h-8" alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-semibold text-neutral-100">{name}</p>
      </div>
    </div>
  );
};

const SkillsListComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionStartComponent
        title="Skills"
        description="I have experience with the following technologies"
      />
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        <SkillItemComponent name="NextJS" icon="icons/next.svg" />
      </div>
    </div>
  );
};

export default SkillsListComponent;
