import clsx from "clsx";
import "./container.scss";
import { type FC, type ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

const Container: FC<props> = ({ children, className }) => {
  return <div className={clsx("container", className)}>{children}</div>;
};

export default Container;
