import { useEffect, useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
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
  const [secondActive, setSecondActive] = useState<string>("");

  const toggleSecondLevel = (link: string) => {
    setSecondActive(secondActive === link ? "" : link);
  };

  const location = useLocation().pathname;
  const lastPart = location.split("/");

  const last1 = lastPart[lastPart.length - 1];
  const last2 = lastPart[lastPart.length - 2];
  const last3 = lastPart[lastPart.length - 3];

  useEffect(() => {
    const link = activeLink.replace("/", "");

    setActive(link === last1 || link === last2 || link === last3);
  }, [last1, last2, last3]);

  return (
    <div className="btnaside" data-active={active}>
      <Link
        to={`/ru/catalog${activeLink}`}
        className={clsx("buttonAside", className)}
        onClick={() => {
          setActive((e) => {
            if (list.length > 0) {
              setActive(true);
            }
          });
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
                to={`/ru/catalog${activeLink}${item.link}`}
                className="item-header"
                onClick={() => {
                  toggleSecondLevel(item.link);
                }}
              >
                {item.name}
                {item.list && (
                  <ChevronDown
                    size={14}
                    className={clsx("chevron-small", {
                      rotated: secondActive === item.link,
                    })}
                  />
                )}
              </Link>

              {item.list && (
                <div
                  className="collapse-wrapper"
                  data-open={secondActive === item.link}
                >
                  <ul className="three">
                    {item.list.map((subItem, subIndex) => (
                      <li key={subIndex} className="three__li">
                        <Link
                          to={`/ru/catalog${activeLink}${item.link}${subItem.link}`}
                        >
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
