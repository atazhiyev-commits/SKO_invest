import { useState, type FC } from "react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown } from "lucide-react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./buttonAside.scss";

interface Props {
  name: string;
  activeLink: string;
  list?: Array<any>;
  children?: React.ReactNode;
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, list, activeLink, className }) => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState<number>();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const lastSegment = location.split("/").filter(Boolean).at(-1);

  return (
    <div className="btnaside" data-active={active}>
      <Link
        to={location + activeLink}
        onClick={(e) => {
          if (lastSegment) {
            e.preventDefault();
            setActive(!active);
          }
        }}
        className={clsx("buttonAside", className)}
      >
        <span className="buttonAside__name">
          {name} <ChevronDown size={16} className="chevron" />
        </span>
      </Link>
      <ul className="second">
        {list?.map(
          (
            item: { name: string; link: string; list?: Array<any> },
            index: number
          ) => (
            <li
              key={index}
              className="second__li"
              data-active-second={secondActive === index}
              onClick={() => setSecondActive(index)}
            >
              {item.name}
              {item.list && (
                <ul className="three">
                  {item.list.map(
                    (
                      subItem: { name: string; link: string },
                      subIndex: number
                    ) => (
                      <li key={subIndex} className="three__li">
                        {subItem.name}
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ButtonAside;
