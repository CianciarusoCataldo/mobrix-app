import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

import { store } from "@store/index";
import { initLocalization } from "@store/slices/localization";
import { SupportedLanguages } from "./types";

if (!i18next.isInitialized) {
  i18next
    .use(I18NextHttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      detection: {
        order: ["querystring", "cookie", "localStorage", "navigator"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      ns: ["common", "page-titles"],
      defaultNS: "common",
    })
    .then((t) => {
      store.dispatch(
        initLocalization({ lang: i18next.language as SupportedLanguages })
      );
    })
    .catch((error) => {
      console.error("i18next initialization failed:", error);
    });
}
export default i18next;
