import type { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLG } from "../../app/lg";
import Container from "../../components/container/Container";

import { Facebook, Instagram, Send } from "lucide-react";
import logo from "./../../assets/images/logo/logo.svg";
import gerb from "./../../assets/images/logo/gerb.svg";

import "./footer.scss";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const lang = useLG.lang;

  const { t } = useTranslation();
  return (
    <footer className={clsx("footer", className)} id="contact">
      <Container>
        <div className="footer__inner">
          <div className="footer__icons">
            <div className="iconGlav">
              <div className="gerb">
                <Link to={lang + "https://primeminister.kz/"}>
                  <img src={gerb} alt="Герб" />
                </Link>
              </div>
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="Логотип" />
                </Link>
              </div>
            </div>
            <div className="socMedia">
              <Link className="soc_link" to="https://www.facebook.com/rsk.sko/">
                <Facebook className="iconMedia" size={26} />
              </Link>
              <Link className="soc_link" to="https://www.instagram.com/sko_kz/">
                <Instagram className="iconMedia" size={26} />
              </Link>
              <Link className="soc_link" to="https://t.me/s/skonews">
                <Send className="iconMedia" size={26} />
              </Link>
            </div>
          </div>

          <div className="footer__menu">
            <h2 className="title-footer">{t("footer.forInvestors")}</h2>
            <nav className="footer__menu-list">
              <li className="menu-item">
                <Link to={lang + "/investor-guide"}>
                  {t("footer.listInvestor.guide")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/investment-opportunities"}>
                  {t("footer.listInvestor.opportunities")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/investment-map"}>
                  {t("footer.listInvestor.map")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/regulations"}>
                  {t("footer.listInvestor.regulations")}
                </Link>
              </li>
            </nav>
          </div>

          <div className="footer__navigation">
            <h2 className="title-footer">{t("footer.navigate")}</h2>
            <nav className="footer__navigation-list">
              <ul className="footer__navigation-list">
                <li className="item-list">
                  <Link to={lang + "/news"} className="item_link">
                    {t("footer.listNavigate.news")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link to={lang + "/send-request"} className="item_link">
                    {t("footer.listNavigate.sendRequest")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link
                    to={lang + "/investor-protection"}
                    className="item_link"
                  >
                    {t("footer.listNavigate.defense")}
                  </Link>
                </li>
                <li className="item-list">
                  <Link to={lang + "/about-region"} className="item_link">
                    {t("footer.listNavigate.aboutRegion")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h2 className="title-footer">{t("footer.contacts")}</h2>
            <div className="contacts">
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.phone")}:{" "}
                </h3>
                <p className="number">+7 777 123 1234</p>
              </div>
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.homephone")}:{" "}
                </h3>
                <p className="number">+7 7152 123 123</p>
              </div>
              <div className="email">
                <h3 className="phone-title">
                  {t("footer.contactItems.email")}
                </h3>
                <p className="mail">test@mailgov.kz</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
