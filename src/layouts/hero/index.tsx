import { Link } from "react-router";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Container from "../../components/container/Container";
import type { headerList } from "../header/HeaderDown";

import { ChevronRight } from "lucide-react";
import img from "./../../assets/images/background/back.png";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useTranslation();
  const listHero = t("hero.list", { returnObjects: true }) as Array<headerList>;

  return (
    <section className={clsx("hero", className)}>
      <img src={img} alt="bgimg" className="hero__bg" />
      <Container>
        <div className="hero__content">
          <h1 className="hero__title">{t("hero.investSKO")}</h1>

          <nav className="hero__content-nav">
            <h2 className="title-section">{t("hero.Iwant")}</h2>
            <ul className="hero__ul">
              {listHero.map((item, index: number) => (
                <li className="item-hero" key={index}>
                  <ChevronRight />
                  <Link to={"catalog" + item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
