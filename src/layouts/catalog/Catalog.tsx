import type { FC } from "react";
import clsx from "clsx";
import Container from "../../components/container/Container";
import ButtonAside from "../../components/asideBtn";

import "./catalog.scss";

interface Props {
  pageName?: string;
  className?: string;
}

const Catalog: FC<Props> = ({ pageName, className }) => {
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
            <ButtonAside name="Регистрация бизнеса" />
            <ButtonAside name="Банки второго уровня" />
            <ButtonAside name="Гостиницы СКО" />
          </aside>
          <div className="catalog__content-info">
            <div className="content">
              <h2>Регистрация бизнеса</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
