import ProjectComponent from "../ProjectComponent";

const ProjectListComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-3xl font-bold text-blue-400">Projects</p>
        <span className="text-blue-200 text-center">
          Here you can find all the projects I have worked on in the past.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ProjectListComponent;
