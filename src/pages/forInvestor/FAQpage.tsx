import type { FAQlist } from "@/components/Accordion/AccordionFAQ";
import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import "./forinvestor.scss"

const FAQpage = () => {
  const { t } = useTranslation();
  const listFAQ = t("faq.list", { returnObjects: true }) as Array<FAQlist>;

  return (
    <section className={clsx("faq-page")}>
      <h2 className="">{t("faq.forInvestors")}</h2>
      <div className="faq-page__content">
        {listFAQ.map((item, index: number) => (
          <div className="faq-page__item" key={index}>
            <AccordionFAQ
              question={item.question}
              answer={item.answer}
              className="accord"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQpage;
