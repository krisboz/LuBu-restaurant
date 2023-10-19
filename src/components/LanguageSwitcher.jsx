import i18n from "i18next";
import { GB, DE } from "country-flag-icons/react/3x2";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
const LanguageSwitcher = () => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="language-switcher">
      <select
        onChange={(event) => changeLanguage(event.target.value)}
        value={i18n.language}
      >
        <option value="de">{getUnicodeFlagIcon("DE")} </option>
        <option value="en">{getUnicodeFlagIcon("GB")} </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
