import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import it from "./locales/it.json";

const savedLanguage = localStorage.getItem("language");

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  it: {
    translation: it,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: ["en", "de", "it"],
});

export default i18n;
