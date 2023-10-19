import React from "react";
import "../styles/Footer.scss";
import { useTranslation } from "react-i18next";
import { BsFillTelephoneFill as PhoneIcon } from "react-icons/bs";
import { FaLocationDot as LocIcon } from "react-icons/fa6";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <section className="basic-info">
        <article className="address">
          <h2>{t("name")}</h2>
          <p>
            {" "}
            <LocIcon />
            {t("address")}
          </p>
          <p>
            {" "}
            <PhoneIcon /> {t("number")}
          </p>
        </article>
        <article className="opening-times">
          <p>{t("opening-weekday")}</p>
          <p>{t("opening-weekend")}</p>
          <p>{t("opening-saturday")}</p>
        </article>
      </section>
      <section className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.3726217374224!2d11.582448575702639!3d48.141621071243925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758e5e06c751%3A0x892e1b64dc0261e0!2sLu%20Bu%20Soul%20Food!5e0!3m2!1shr!2sde!4v1697660152235!5m2!1shr!2sde"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </footer>
  );
};

export default Footer;
