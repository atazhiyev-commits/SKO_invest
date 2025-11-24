import { useState, type FC } from "react";
import clsx from "clsx";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLG } from "../../app/lg";

import "./sideMenu.scss";
import type { headerList } from "../../layouts/header/HeaderDown";

interface Props {
  className?: string;
  toggled?: boolean;
  setToggled?: any;
  children?: React.ReactNode;
}

const SideMenu: FC<Props> = ({ toggled, setToggled, children, className }) => {
  const { t } = useTranslation();
  const lang = useLG.lang;
  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  return (
    <section
      className={clsx("sideMenu", className)}
      style={{
        direction: "rtl",
      }}
    >
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        rtl
        className="sidebar"
        backgroundColor="#fff"
        collapsedWidth="350px"
        collapsed
      >
        <Menu className="menu">
          <MenuItem className="menu-item">
            {t("header.headerMenu.howHelp")}
          </MenuItem>
          <MenuItem className="menu-item">
            {t("header.headerMenu.protectionInvest")}
          </MenuItem>
          <MenuItem className="menu-item">
            {t("header.headerMenu.contacts")}
          </MenuItem>
          {nameBottom.map((item, index) => (
            <MenuItem
            key={index}
              component={<Link to={lang + "/catalog" + item.link} />}
              className="menu-item"
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      {children}
    </section>
  );
};

export default SideMenu;
