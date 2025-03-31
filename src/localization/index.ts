"use client";

import { store } from "@store/index";
import { initLocalization } from "@store/slices/localization";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { MobrixAppConfig } from "../core/types/global";
import { SupportedLanguages } from "./types";

export const initializeI18next = async (
  config: MobrixAppConfig["localization"] = {}
) => {
  try {
    await i18next
      .use(I18NextHttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: config.fallbackLanguage,
        detection: {
          order: ["querystring", "cookie", "localStorage", "navigator"],
        },
        backend: {
          loadPath: config.loadPath,
        },
        ns: config.namespaces,
        defaultNS: config.defaultNamespace,
        supportedLngs: config.supportedLanguages,
      });

    store.dispatch(
      initLocalization({ lang: i18next.language as SupportedLanguages })
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("i18next initialization failed:", error);
  }
};

export default i18next;
