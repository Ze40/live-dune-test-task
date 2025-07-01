import { type ReactNode } from "react";

import clsx from "clsx";

import classes from "./style.module.scss";

interface ContainerProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(className, classes.container)}>{children}</div>;
};

export default Container;
