import Container from '../../components/container/Container';
import { Link } from "react-router";

import { Eye, FacebookIcon, Instagram, Send } from "lucide-react";
import logo from "./../../assets/images/logo/logo.svg"

import './header.scss';

const HeaderUp = () => {
  return (
    <Container className="header__UP">
        <div className="search">
          <input
          className="header__search"
            type="search"
            name="search_SKO"
            id="searchSKO"
            placeholder="Поиск"
          />
        </div>

        <nav className="header__nav">
            <ul className="header__nav-menuList">
                <li className="header__nav-item header-item"><a className="item_link" href="#">О регионе</a></li>
                <li className="header__nav-item header-item"><a className="item_link" href="#">Как мы помогаем</a></li>
                <li className="header__nav-item header-item"><a className="item_link" href="#">Защита инвесторов</a></li>
                <li className="header__nav-item header-item"><a className="item_link" href="#">Контакты</a></li>
            </ul>
            <ul className="header__nav-socMedia">
                <li className="socItem"><a className="soc_link" href="https://www.facebook.com/rsk.sko/"><FacebookIcon size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://www.instagram.com/sko_kz/"><Instagram size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://t.me/s/skonews"><Send size={20} /></a></li>
            </ul>
            <ul className="header__nav-global_setting">
                <button className="eyes">
                    <Eye />
                </button>
                <div className="language">
                    <span>RU</span>
                </div>
            </ul>
        </nav>

        <div className="header__logo">
            <Link to="/" className="header__logo-link">            
                <img src={logo} alt="Logo" />
                <span>SKO</span>
            </Link>
        </div>
      </Container>
  )
}

export default HeaderUp