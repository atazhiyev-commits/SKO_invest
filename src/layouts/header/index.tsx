import clsx from "clsx";

import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";

import "./header.scss";
import Container from "../../components/container/Container";

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
      <Container>
        <HeaderUp />
        <HeaderDown />
      </Container>
    </header>
  );
};

export default Header;
