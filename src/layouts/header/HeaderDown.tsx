import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import DropDown from "../../components/dropdown";
import { useLG } from "../../app/lg";
import type { LayoutType } from "@/types/translateTypes";

import "./header.scss";

const HeaderDown = () => {
  const { t } = useTranslation();

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<LayoutType>;

  const lang = useLG.lang;

  return (
    <div className="header__bottom">
      {nameBottom.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link to={lang + "/catalog" + item.link} className="link">
            {item.label}
            <ChevronDown className="chevronDown" size={18} />
          </Link>

          {item.list.length > 0 && (
            <DropDown
              list={item.list}
              basePath={lang + "/catalog" + item.link}
              className="dropdown"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderDown;
