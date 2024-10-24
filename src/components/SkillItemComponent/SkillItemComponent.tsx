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

export default SkillItemComponent;