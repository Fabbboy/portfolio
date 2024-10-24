import SectionStartComponent from "../SectionStartComponent";
import SkillItemComponent from "../SkillItemComponent";

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
