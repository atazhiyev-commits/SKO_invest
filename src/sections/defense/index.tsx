import clsx from "clsx";
import Container from "../../components/container/Container";

import "./defense.scss";
import { useTranslation } from "react-i18next";

interface DefenseProps {
  className?: string;
}

const Defense: React.FC<DefenseProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <section className={clsx("defense", className)}>
      <Container>
        <header className="defense__header">
          <h2 className="title-section">{t("defense.title")}</h2>
          <button className="btn-section">{t("defense.button")}</button>
        </header>
        <div className="defense__content">text</div>
      </Container>
    </section>
  );
};

export default Defense;
