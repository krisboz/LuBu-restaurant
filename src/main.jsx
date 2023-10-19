import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslation from "./locales/de/translation.json";
import enTranslation from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: deTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  lng: "en", // Set the default language
  fallbackLng: "de", // Fallback language in case of missing translations
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
