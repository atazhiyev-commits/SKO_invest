import type { FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const param = useLocation().search.split("=")[1];
  console.log(param)
  return (
    <section className={clsx("searchCatalog", className)}>
      <h2>{param}</h2>
    </section>
  );
};

export default SearchCatalog;
