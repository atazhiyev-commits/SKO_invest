import { useState, type FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import "./buttonAside.scss";

interface SubItem {
  name: string;
  link?: string;
}

interface ListItem {
  name: string;
  link: string;
  list?: SubItem[];
}

interface Props {
  name: string;
  activeLink: string;
  list?: ListItem[];
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, list, activeLink, className }) => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState<number | null>(null);

  const toggleSecondLevel = (index: number) => {
    setSecondActive(secondActive === index ? null : index);
  };

  return (
    <div className="btnaside" data-active={active}>
      <Link
        to={`/ru/catalog${activeLink}`}
        className={clsx("buttonAside", className)}
        onClick={() => {
          if (list && list.length > 0) {
            setActive(!active);
          }
        }}
      >
        <span className="buttonAside__name">
          {name}
          {list && list.length > 0 && (
            <ChevronDown size={16} className="chevron" />
          )}
        </span>
      </Link>

      <div className="collapse-wrapper" data-open={active}>
        <ul className="second">
          {list?.map((item, index) => (
            <li key={index} className="second__li">
              <Link
                to={`/ru/catalog${item.link}`}
                className="item-header"
                onClick={(e) => {
                  toggleSecondLevel(index);
                }}
              >
                {item.name}
                {item.list && (
                  <ChevronDown
                    size={14}
                    className={clsx("chevron-small", {
                      rotated: secondActive === index,
                    })}
                  />
                )}
              </Link>

              {item.list && (
                <div
                  className="collapse-wrapper"
                  data-open={secondActive === index}
                >
                  <ul className="three">
                    {item.list.map((subItem, subIndex) => (
                      <li key={subIndex} className="three__li">
                        <Link to={`/ru/catalog${item.link}${subItem.link}`}>
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonAside;
