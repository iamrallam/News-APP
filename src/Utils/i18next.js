import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/en/translation.json";
import ar from "../../public/locales/ar/translation.json";

export const languageResources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: languageResources,
});
export default i18next;
