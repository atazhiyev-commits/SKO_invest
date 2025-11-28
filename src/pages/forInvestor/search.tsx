import type { FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { useSearchIndex } from "@/shared/search/searchIndex";
import type { LayoutType } from "@/types/translateTypes";
import { useLang } from "@/shared/store/language";
import { HashLink } from "react-router-hash-link";

import "./Seacrh.scss";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const resIndex = useSearchIndex();
  const searchParams = useLocation().search.split("=")[1];
  const decoded = decodeURIComponent(searchParams);

  const res = resIndex.filter((item: any) => {
    return (
      item.title.toLowerCase().includes(decoded.toLowerCase())
    );
  });

  console.log(res);

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section searchCatalog__title">Результаты: </h2>
      <div className="blockresult">
        {res && res?.map((item: any, index: number) => (
          <>
            <HashLink
              to={`/${useLang.lang}${item?.link}`}
              key={index}
              className="resultText"
            >
              {item.title}
            </HashLink>
            {item?.list !== undefined && item.list.map(
              (subItem: any, subIndex: number) =>
                subItem.name.toLowerCase().includes(decoded.toLowerCase()) && (
                  <HashLink
                    to={`/${useLang.lang}${subItem?.link}`}
                    key={subIndex}
                    className="resultText"
                  >
                    {subItem.name}
                  </HashLink>
                )
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default SearchCatalog;
