import { Fragment, type FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useSearchIndex } from "@/shared/search/searchIndex";
import { useLang } from "@/shared/store/language";

import type { LayoutType } from "@/types/translateTypes";

import "./seacrh.scss";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const resIndex = useSearchIndex();

  const searchParams = useLocation().search.split("=")[1];
  const decoded = decodeURIComponent(searchParams)
    .toLowerCase()
    .replace("+", "");

  const res = resIndex.map((section) => {
    const titleMatch =
      section.title && section.title.toLowerCase().includes(decoded);

    const filteredList = section.list?.filter((item: any) =>
      Object.values(item)
        .filter((v) => typeof v === "string")
        .some((v) => v.toLowerCase().replace(" ", "").includes(decoded))
    );

    return {
      title: titleMatch ? section.title : null,
      link: section.link,
      list: filteredList ? filteredList : section.list,
    };
  });

  const cataloglist = resIndex
    .filter((item: any) => item.title === "catalog")
    .map((item: any) =>
      item.list.filter((first: any) =>
        first.label.replace(" ", "").includes(decoded)
      )
    )
    console.log(cataloglist);

  console.log(cataloglist);

  console.log(res);

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section searchCatalog__title">Результаты: </h2>
      <div className="blockresult">
        {cataloglist.map((section: any, index: number) => (
          <HashLink
            key={index}
            to={`/${useLang.lang}${section.title}${section.link}`}
            className="resultText section-title section-result"
          >
            {section.title}
          </HashLink>
        ))}
        {res.map((section: any, index: number) => (
          <Fragment key={index}>
            {section.title !== null && (
              <HashLink
                to={`/${useLang.lang}${
                  section.hash ? section.hash : section.link
                }`}
                className="resultText section-title section-result"
              >
                {section.title}
              </HashLink>
            )}

            {section.list &&
              section.list.map((item: any, subIndex: number) => (
                <HashLink
                  key={subIndex}
                  to={`/${useLang.lang}${item.link ? item.link : section.link}`}
                  className="resultText item-text"
                >
                  {item.name ||
                    item.question ||
                    item.title ||
                    Object.values(item)
                      .filter((v) => typeof v === "string")
                      .join(" • ")}
                </HashLink>
              ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SearchCatalog;
