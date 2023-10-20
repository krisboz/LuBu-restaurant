import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/hero-photo.png";
import "../styles/Home.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="home">
      <h1>{t("hero-headline")}</h1>

      <div className="hero-container">
        <div className="description-container">
          <p>{t("hero-description")}</p>

          <div className="cta-container">
            <Link to={"/menu"}>{t("hero-cta-menu")}</Link>{" "}
            <Link>{t("hero-cta-reserve")}</Link>{" "}
          </div>
        </div>
        <div className="photo-container">
          <img
            src={heroPhoto}
            alt="picture of delicious sushi food"
            loading="lazy"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default Home;
