import { SkillItem } from "./types";
import Image from "next/image";

type Props = {
  skillItem: SkillItem;
};

const SkillItemComponent: React.FC<Props> = ({ skillItem }) => {
  return (
    <div className="flex flex-row items-center justify-center min-w-[120px] max-w-[160px] h-[60px] p-4 bg-neutral-800 border border-neutral-700 rounded-lg space-x-4">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={skillItem.icon}
          className="w-8 h-8 rounded-sm"
          alt={skillItem.name}
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-base font-semibold text-neutral-100 text-center">
          {skillItem.name}
        </p>
      </div>
    </div>
  );
};

export default SkillItemComponent;
