import type { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Container from "../../components/container/Container";

import logo from "./../../assets/images/logo/logo.svg";
import gerb from "./../../assets/images/logo/gerb.svg";

import { Facebook, Instagram, Send } from "lucide-react";

import "./footer.scss";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <footer className={clsx("footer", className)}>
      <Container>
        <div className="footer__inner">
          <div className="footer__icons">
            <div className="iconGlav">
              <div className="gerb">
                <Link to={"https://primeminister.kz/"}>
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
                <Link to={"/investor-guide"}>
                  {t("footer.listInvestor.guide")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/investment-opportunities"}>
                  {t("footer.listInvestor.opportunities")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/investment-map"}>
                  {t("footer.listInvestor.map")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/regulations"}>
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
                  <a href="/news" className="item_link">
                    {t("footer.listNavigate.news")}
                  </a>
                </li>
                <li className="item-list">
                  <a href="/send-request" className="item_link">
                    {t("footer.listNavigate.sendRequest")}
                  </a>
                </li>
                <li className="item-list">
                  <a href="/investor-protection" className="item_link">
                    {t("footer.listNavigate.defense")}
                  </a>
                </li>
                <li className="item-list">
                  <a href="/about-region" className="item_link">
                    {t("footer.listNavigate.aboutRegion")}
                  </a>
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
