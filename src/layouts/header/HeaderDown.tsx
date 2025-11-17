import { listHeader } from "./list";
import "./header.scss";
import Container from "../../components/container/Container";
import { Link } from "react-router";

const HeaderDown = () => {
  return (
    <Container className="header__DOWN">
      {listHeader.map((item, index) => (
        <div key={index} className="header__down-item header-item">
          <Link to={"/"}> {item.label}</Link>
        </div>
      ))}
    </Container>
  );
};

export default HeaderDown;
