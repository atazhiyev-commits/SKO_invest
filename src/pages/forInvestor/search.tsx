import { Fragment, type FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { useSearchIndex } from "@/shared/search/searchIndex";
import { useLang } from "@/shared/store/language";

import "./seacrh.scss";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const seacrh = t("header.search", {
    returnObjects: true,
  }) as { label: string; link: string };

  const resIndex = useSearchIndex();

  const searchParams = useLocation().search.split("=")[1];
  const decoded = decodeURIComponent(searchParams)
    .toLowerCase()
    .replace("+", "");

  const clear = (name: string) => {
    return name.replace(" ", "").toLowerCase();
  };

  const res = resIndex
    .filter((find: any) => find.title !== "catalog")
    .map((section) => {
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

  const cataloglist =
    resIndex
      .find((i: any) => i.title === "catalog")
      ?.list.flatMap((first: any) => {
        const firstMatch = clear(first.label).includes(decoded);

        const seconds = first.list.flatMap((second: any) => {
          const secondMatch = clear(second.name).includes(decoded);

          const thirds = second.list?.filter((t: any) =>
            clear(t.name).includes(decoded)
          );

          if (secondMatch)
            return [
              {
                name: second.name,
                link: first.link + second.link,
                list: thirds,
              },
            ];
          if (thirds?.length)
            return thirds.map((t: any) => ({
              name: t.name,
              link: first.link + second.link + t.link,
            }));
          return [];
        });

        if (firstMatch)
          return [{ name: first.label, link: first.link, list: seconds }];
        return seconds;
      }) ?? [];

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section searchCatalog__title">{seacrh.result}: </h2>
      <div className="blockresult">
        {cataloglist.flatMap((item: any, index: number) => (
          <Fragment key={index}>
            <HashLink
              state={{ name: item.name }}
              to={`/${useLang.lang}/catalog${item.link}`}
              className="resultText item-text"
            >
              {item.name}
            </HashLink>
          </Fragment>
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
                {section.title || section.label}
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
                    item.label ||
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
