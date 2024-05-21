import AppType from "@/enums/AppType";
import { ReactElement } from "react";

class ApplicationInfo {
  id: number;
  name: string;
  icon: string;
  type: AppType;
  payload: string | ReactElement | null = null;

  constructor(
    id: number,
    type: AppType,
    name: string,
    icon: string,
    payload: string | ReactElement | null = null
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.type = type;
    this.payload = payload;
  }
}

export default ApplicationInfo;
