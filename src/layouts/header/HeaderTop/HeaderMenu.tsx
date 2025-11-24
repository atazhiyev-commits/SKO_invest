import { type FC } from "react";
import { HashLink } from "react-router-hash-link";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface Props {
  link: string;
  className?: string;
}

const HeaderMenu: FC<Props> = ({ link, className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx("header__menu", className)}>
      <ul className="header__menu-menuList">
        <li className="item-li header-item">
          <HashLink to={link + "/#helpers"} className="item_link">
            {t("header.headerMenu.howHelp")}
          </HashLink>
        </li>
        <li className="item-li header-item">
          <HashLink to={link + "/#defense"} className="item_link">
            {t("header.headerMenu.protectionInvest")}
          </HashLink>
        </li>
        <li className="item-li header-item">
          <HashLink to={link + "/#contact"} className="item_link">
            {t("header.headerMenu.contacts")}
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
