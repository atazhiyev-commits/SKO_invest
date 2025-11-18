import { listHeader } from "./list";
import "./header.scss";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

const HeaderDown = () => {
  return (
    <div className="header__bottom">
      {listHeader.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link to={"/"}> {item.label}</Link>
          <ChevronDown className="chevronDown" size={18} />
        </div>
      ))}
    </div>
  );
};

export default HeaderDown;
