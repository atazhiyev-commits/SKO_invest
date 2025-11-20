import { type FC } from "react";
import { Link } from "react-router";
import clsx from "clsx";

import "./dropDown.scss";
import { useLG } from "../../app/lg";

interface Props {
  list: any;
  nameDrop?: string;
  children?: React.ReactNode;
  className?: string;
}

const DropDown: FC<Props> = ({ list, children, className }) => {
    const lang = useLG.lang;
  return (
    <div className={clsx("dropDown", className)}>
      <div className="dropDown__content">
        {list.map((item: { name: string; link: string }, index: number) => (
          <Link to={lang + item?.link} key={index} className="dropDown__content-name">
            {item.name}
          </Link>
        ))}
        {children}
      </div>
    </div>
  );
};

export default DropDown;
