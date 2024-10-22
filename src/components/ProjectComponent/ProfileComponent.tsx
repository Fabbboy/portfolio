import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { CalendarIcon } from "@heroicons/react/24/solid";

const ProjectComponent = () => {
  return (
    <Card className="bg-neutral-800 border-neutral-700 text-blue-100 rounded-xl shadow-md w-full overflow-hidden">
      <CardContent className="p-4 md:p-6 space-y-4">
        <div className="flex flex-col space-y-3 w-full min-w-0">
          <div className="flex justify-between items-center w-full space-x-4 min-w-0">
            <span className="text-lg md:text-xl font-semibold text-blue-200 truncate">
              Mobile App Redesign - Mobile Team
            </span>
            <Badge
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-800 whitespace-nowrap"
            >
              Ongoing
            </Badge>
          </div>
          <span className="text-sm text-blue-400">UI/UX Designer</span>
        </div>

        <div className="flex items-center space-x-2 text-blue-300">
          <CalendarIcon className="w-4 h-4" />
          <span className="text-sm">2023-09 - 2024-01</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="bg-gray-700 text-white">Figma</Badge>
          <Badge className="bg-gray-700 text-white">React Native</Badge>
          <Badge className="bg-gray-700 text-white">Sketch</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectComponent;
