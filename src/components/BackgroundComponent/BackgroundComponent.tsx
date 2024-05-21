import { ReactElement } from "react";
import cx from "classnames";
import styles from "./BackgroundComponent.module.css"

type Props = {
  children: ReactElement;
};

const BackgroundComponent = ({ children }: Props) => {
  return (
    <div
      className={cx("bg-fixed", "bg-center", "bg-cover", "w-full", "h-screen", styles.background_image)}
    >
      {children}
    </div>
  );
};


export default BackgroundComponent;
