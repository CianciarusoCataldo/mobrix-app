import { store } from "@store/index";
import { initLocalization } from "@store/slices/localization";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { SupportedLanguages } from "./types";

const initializeI18next = async () => {
  try {
    await i18next
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
        supportedLngs: ["en", "it"],
      });

    store.dispatch(
      initLocalization({ lang: i18next.language as SupportedLanguages })
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("i18next initialization failed:", error);
  }
};

if (!i18next.isInitialized) {
  initializeI18next();
}

export default i18next;
