import { Link } from "react-router";
import {  Eye, FacebookIcon, Instagram, Menu, Send } from "lucide-react";

import LanguageSwitcher from "../../shared/ui/LanguageSwitcher";
import logo from "./../../assets/images/logo/logo.svg"

import './header.scss';
import { useTranslation } from "react-i18next";

const HeaderUp = () => {
const {t} = useTranslation();

  return (
    <div className="header__UP">
        <div className="header__search">
          <input
          className="search__input"
            type="search"
            name="search_SKO"
            id="searchSKO"
            placeholder={t('header.seacrhPlaceholder')}
          />
        </div>

        <div className="header__menu">
            <ul className="header__menu-menuList">
                <li className="item-li header-item"><a className="item_link" href="#">{t('header.headerMenu.howHelp')}</a></li>
                <li className="item-li header-item"><a className="item_link" href="#">{t('header.headerMenu.protectionInvest')}</a></li>
                <li className="item-li header-item"><a className="item_link" href="#">{t('header.headerMenu.contacts')}</a></li>
            </ul>
        </div>
        
        <nav className="header__nav">
        <Menu className='header__nav-burger' size={32}/>
            <ul className="header__nav-socMedia">
                <li className="socItem"><a className="soc_link" href="https://www.facebook.com/rsk.sko/"><FacebookIcon className='iconMedia' size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://www.instagram.com/sko_kz/"><Instagram className='iconMedia' size={20} /></a></li>
                <li className="socItem"><a className="soc_link" href="https://t.me/s/skonews"><Send className='iconMedia' size={20} /></a></li>
            </ul>
            <ul className="header__nav-global_setting">
                <button className="eyes">
                    <Eye size={24} />
                </button>
                <LanguageSwitcher />
            </ul>
                <div className="header__logo">
            <Link to="/" className="header__logo-link">            
                <img src={logo} alt="Logo" />
                <span>SKO</span>
            </Link>
            </div>
        </nav>
      </div>
  )
}

export default HeaderUp