import clsx from "clsx";
import Container from "../../components/container/Container";

import "./news.scss";
import { testNews } from "./test";
import BigImg from "../../components/newsCard/BigImg";
import SmallImg from "../../components/newsCard/SmallImg";
import { Link } from "react-router";

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  return (
    <section className={clsx("news", className)}>
      <Container>
        <header className="news__header">
          <h2 className="title-section">Новости</h2>
          <Link to={"/news"} className="btn-section">
            Показать все новости
          </Link>
        </header>
        <div className="news__content">
          {testNews.map((newsItem, index: number) => {
            return index <= 1 ? (
              <Link to={"/link"}>
                <BigImg
                  key={index}
                  title={newsItem.title}
                  date={newsItem.date}
                  imageSrc={newsItem.imageSrc}
                />
              </Link>
            ) : (
              <Link to={"/link"}>
                <SmallImg
                  key={index}
                  title={newsItem.title}
                  date={newsItem.date}
                  imageSrc={newsItem.imageSrc}
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default News;
