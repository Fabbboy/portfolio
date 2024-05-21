import ApplicationInfo from "@/models/Application";
import AppLauncherComponent from "../AppLauncherComponent/AppLauncherComponent";
import React from "react";

type Props = {
  launch_cb: (app: ApplicationInfo) => void;
  apps: ApplicationInfo[];
};

const DesktopCollectionComponent = ({ apps, launch_cb }: Props) => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap max-w-[20%] justify-start">
        {apps.map((app) => (
          <div className="w-1/8 p-4"> 
            <AppLauncherComponent app={app} launch_cb={launch_cb} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopCollectionComponent;
