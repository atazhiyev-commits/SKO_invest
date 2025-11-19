import clsx from "clsx";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Container from "../../components/container/Container";

import { ChevronRight } from "lucide-react";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const {t} = useTranslation();
  return (
    <section className={clsx("hero", className)}>
      <Container>
        <div className="hero__content">
          <h1 className="hero__title">
            {t('hero.investSKO')}
          </h1>

          <nav className="hero__content-nav">
          <h2 className="title-section">{t('hero.Iwant')}</h2>
            <ul className="hero__ul">
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />{t('hero.rentLand')}</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />{t('hero.viewSupport')} </Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />{t('hero.chooseLocation')}</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />{t('hero.implementProject')}</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />{t('hero.choicePlace')}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
