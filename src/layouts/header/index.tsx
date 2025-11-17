import clsx from "clsx";

import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";

import "./header.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 0);
  });

  return (
    <header className={clsx("header", className)}>
      <HeaderUp />
      <div className="header__line" />
      <HeaderDown />
    </header>
  );
};

export default Header;
