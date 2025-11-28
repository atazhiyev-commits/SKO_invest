import type { FC } from "react";
import clsx from "clsx";
import Container from "../../components/container/Container";
import PageNewsCard from "../../components/newsCard/PageNewsCard";
import { useTranslation } from "react-i18next";

import img from "./../../assets/images/newBig.png";
import "./news.scss";

interface Props {
  className?: string;
}

const News: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <section className={clsx("page-news", className)}>
      <Container>
        <div className="page-news__content">
          <h2 className="title-section">{t("PageNews.title")}</h2>
          <div className="page-news__wrapper">
            <PageNewsCard title="LLKOV" date="01.01.2023" imageSrc={img} />
            <PageNewsCard title="LLKOV" date="01.01.2023" imageSrc={img} />
            <PageNewsCard title="LLKOV" date="01.01.2023" imageSrc={img} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
