import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/logo.png";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <img src={Logo}></img>
      <nav className="nav-menu">
        <Link to={"/"}>{t("home")}</Link>
        <Link to={"/menu"}>{t("menu")}</Link>
        <Link to={"/gallery"}>{t("gallery")}</Link>
        <Link to={"/contact"}>{t("contact")}</Link>
      </nav>

      <div className="action-container">
        <button>Reserve</button>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
