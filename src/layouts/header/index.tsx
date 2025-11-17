import clsx from "clsx";

import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";

import './header.scss'

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx("header", className)}>
      <HeaderUp />
      <div className="header__line" />
      <HeaderDown />
    </header>
  );
};

export default Header;
