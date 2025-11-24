import { type FC } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

const Anylink: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={clsx("", className)}>
      <h2>{t("NotFound")}</h2>
    </section>
  );
};

export default Anylink;
