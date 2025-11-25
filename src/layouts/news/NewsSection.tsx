import { Link } from "react-router";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import CarouselEmbla from "@/components/Carousel/CarouselEmbla";
import Container from "@/components/container/Container";
import SmallImg from "@/components/newsCard/SmallImg";

import { testNews } from "./test";

import "./news.scss";

interface NewsProps {
  className?: string;
}

const NewsSection: React.FC<NewsProps> = ({ className }) => {
  const { t } = useTranslation();
  const countNews = 3;

  return (
    <section className={clsx("news", className)}>
      <Container>
        <header className="news__header">
          <h2 className="title-section">{t("news.title")}</h2>
          <Link to={"news"} className="btn-section">
            {t("news.button")}
          </Link>
        </header>

        <div className="news__content">
          <CarouselEmbla newsList={testNews} countNews={countNews} />

          <div className="news__other">
            <h2 className="second-title-section"> {t("news.otherNews")}: </h2>
            <div className="news__other-content">
              {testNews.slice(countNews).map((newsItem, index) => (
                <Link to={"/link"} key={index} className="news__small-wrapper">
                  <SmallImg
                    className="news__small"
                    title={newsItem.title}
                    date={newsItem.date}
                    imageSrc={newsItem.imageSrc}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
