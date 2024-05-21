import AppType from "@/enums/AppType";
import ApplicationInfo from "@/models/Application";
import Image from "next/image";

type Props = {
  app: ApplicationInfo;
  launch_cb: (app: ApplicationInfo) => void;
};

const AppLauncherComponent = ({ app, launch_cb }: Props) => {
  return (
    <div
      onClick={() => launch_cb(app)}
      className="flex flex-col items-center cursor-pointer"
    >
      <Image
        src={app.type}
        width={64}
        height={64}
        alt={`launcher: ${app.name}`}
        className="cursor-pointer"
      />
      <p className="text-white text-xs">{app.name}</p>
    </div>
  );
};

export default AppLauncherComponent;
