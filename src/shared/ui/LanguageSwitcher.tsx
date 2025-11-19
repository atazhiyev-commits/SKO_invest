import type { FC } from "react";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";

interface Props {
  className?: string;
}

const LanguageSwitcher: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const locate = useLocation().pathname.split('/').pop();

  return (
    <select
      name="lang"
      value={locate}
      className={clsx("language", className)}
      onChange={(e) => {
        navigate("/" + e.target.value);
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
