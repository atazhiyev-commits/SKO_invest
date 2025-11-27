import { useEffect, type FC } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";
import i18n from "../config/i18n/i18n";

interface Props {
  className?: string;
}

const LanguageSwitcher: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const currentLang = segments.length > 0 ? segments[0] : "en";
  const restPath = segments.slice(1).join("/");

  return (
    <select
      name="lang"
      value={currentLang}
      className={clsx("language", className)}
      onChange={(e) => {
        const newUrl = `/${e.target.value}/${restPath}`;

        navigate(newUrl);
        i18n.changeLanguage(e.target.value);
        window.location.reload();
      }}
    >
      <option value="ru">RU</option>
      <option value="kz">KZ</option>
      <option value="en">EN</option>
      <option value="chi">CHI</option>
    </select>
  );
};

export default LanguageSwitcher;
