import type { FC } from "react";
import clsx from "clsx";
import Skeleton from "@mui/material/Skeleton";

import "./skeleton.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const NewsSkeleton: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx("news_skeletion", className)}>
      <div className="card_news">
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={200}
        />
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={60}
        />
      </div>
      <div className="card_news">
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={200}
        />
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={60}
        />
      </div>
      <div className="card_news">
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={200}
        />
        <Skeleton
          variant="rectangular"
          className="img"
          width={375}
          height={60}
        />
      </div>

      {children}
    </section>
  );
};

export default NewsSkeleton;
