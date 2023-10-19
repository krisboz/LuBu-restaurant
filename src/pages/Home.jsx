import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="home">
      <h1>{t("hero-headline")}</h1>
      <p>{t("hero-description")}</p>

      <div className="cta-container">
        <Link to={"/menu"}>{t("hero-cta-menu")}</Link>{" "}
        <Link>{t("hero-cta-reserve")}</Link>{" "}
      </div>
    </main>
  );
};

export default Home;
