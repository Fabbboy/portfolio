"use client";
import ApplicationInfo from "@/models/Application";
import BackgroundComponent from "../../components/BackgroundComponent/BackgroundComponent";
import { useEffect, useState } from "react";
import AppLauncherComponent from "@/components/AppLauncherComponent/AppLauncherComponent";
import DesktopCollectionComponent from "@/components/DesktopCollectionComponent/DesktopCollectionComponent";
import AppType from "@/enums/AppType";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export default function Desktop() {
  const [openApps, setOpenApps] = useState<ApplicationInfo[]>([]);

  const openApplication = (app: ApplicationInfo) => {
    setOpenApps((prevApps) => {
      if (prevApps.some((openApp) => openApp.id === app.id)) {
        return prevApps;
      }
      return [...prevApps, app];
    });
  };

  const apps = [
    new ApplicationInfo(
      0,
      AppType.Link,
      "CV.pdf",
      "/elements/file.svg",
      "https://github.com/fabbboy/"
    ),
    new ApplicationInfo(
      0,
      AppType.Link,
      "CV.pdf",
      "/elements/file.svg",
      "https://github.com/fabbboy/"
    ),
  ];

  useEffect(() => {
    console.log(openApps);
  }, [openApps]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <BackgroundComponent>
        <HeaderComponent />
        <DesktopCollectionComponent apps={apps} launch_cb={openApplication} />
      </BackgroundComponent>
    </main>
  );
}
