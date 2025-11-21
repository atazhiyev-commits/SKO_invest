import type { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

import "./buttonAside.scss";

interface Props {
  name: string;
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, className }) => {
  return (
    <Link to={"/"} className={clsx("buttonAside", className)}>
      <span className="buttonAside__name">
        {name} <ChevronDown size={16} className="chevron" />
      </span>
    </Link>
  );
};

export default ButtonAside;
