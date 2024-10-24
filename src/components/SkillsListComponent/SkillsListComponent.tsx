import SectionStartComponent from "../SectionStartComponent";

type Props = {
  name: string;
  icon: string;
};

const SkillItemComponent: React.FC<Props> = ({ name, icon }) => {
  return (
    <div className="flex flex-row items-center justify-center min-w-[120px] max-w-[160px] p-4 bg-neutral-800 border border-neutral-700 rounded-lg space-x-4">
      <div className="flex flex-col items-center justify-center">
        <img src={icon} className="w-8 h-8" alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-base font-semibold text-neutral-100 text-center">
          {name}
        </p>
      </div>
    </div>
  );
};

const SkillsListComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <SectionStartComponent
        title="Skills"
        description="I have experience with the following technologies"
      />
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        <SkillItemComponent name="NextJS" icon="icons/next.svg" />
        <SkillItemComponent name="React" icon="icons/react.svg" />
        <SkillItemComponent name="TailwindCSS" icon="icons/tailwind.svg" />
        <SkillItemComponent name="NodeJS" icon="icons/node.svg" />
      </div>
    </div>
  );
};

export default SkillsListComponent;
