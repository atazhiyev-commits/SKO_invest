import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Info } from "lucide-react";
import Container from "../../components/container/Container";
import BlockHelper from "../../components/blockHelper";

import "./helpers.scss";
import { textHelp } from "./test";

interface HelperProps {
  className?: string;
}

type helpList = {
  name: string;
  list: string;
};

const Helper: React.FC<HelperProps> = ({ className }) => {
  const [infoText, setInfoText] = useState<any>(textHelp[0]);
  const { t } = useTranslation();

  const listHelpText = t("helpers.list", {
    returnObjects: true,
  }) as Array<helpList>;

  return (
    <section className={clsx("helper", className)} id="helpers">
      <Container>
        <h2 className="title-section">{t("helpers.title")}</h2>
        <div className="helper__content">
          <ul className="helper__content-list">
            {listHelpText.map((item, index: number) => (
              <li className="list_item" key={index}>
                <BlockHelper
                  key={index}
                  icon={<Info size={32} />}
                  name={item.name}
                  onClick={() => {
                    setInfoText(item);
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="helper__content-info">
            <h2 className="title-section">{infoText.name}</h2>
            <div className="descInfo">{infoText.info}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Helper;
