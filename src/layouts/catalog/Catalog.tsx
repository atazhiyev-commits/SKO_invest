import { type FC } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Container from "../../components/container/Container";
import ButtonAside from "../../components/asideBtn";
import type { headerList } from "../header/HeaderDown";

import "./catalog.scss";
import BusinessRegistration from "../../pages/forInvestor/business-registration";
import Banks from "../../pages/forInvestor/banks";
import { useLocation } from "react-router";
import { CatalogContent } from "../../pages/forInvestor/list";

interface Props {
  pageName?: string;
  className?: string;
}

const Catalog: FC<Props> = ({ pageName, className }) => {
  const { t } = useTranslation();

  const location = useLocation().pathname;

  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  console.log(lastPart);

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  return (
    <section className={clsx("catalog", className)}>
      <div className="catalog__head">
        <Container className="catalog__head-container">
          <div className="breadcrumb">
            <p>Breadcrumb {">"} page</p>
          </div>
          <h2 className="title-section catalog__head-title">{pageName}</h2>
        </Container>
      </div>

      <Container>
        <div className="catalog__content">
          <aside className="catalog__content-aside">
            {nameBottom.map((item, index) => (
              <ButtonAside
                key={index}
                name={item.label}
                activeLink={item.link}
                list={item.list}
              />
            ))}
          </aside>
          <div className="catalog__content-info">
            <div className="content">
              {CatalogContent.map(
                (item, index) =>
                  item.link === lastPart && <item.element key={index} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
