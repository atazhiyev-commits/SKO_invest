import type { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const LandPlot: FC<Props> = ({ className }) => {
  return (
    <section className={clsx("landPlot", className)}>
      <h2>Земельный участок</h2>
    </section>
  );
};

export default LandPlot;
