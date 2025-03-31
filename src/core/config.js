const defaultConfig = {
  localization: {
    fallbackLanguage: "en",
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    namespaces: ["common", "page-titles"],
    defaultNamespace: "common",
    supportedLanguages: ["en", "it"],
  },
};

export const initConfig = async () => import("@root/mobrix.config.js").then((inputConfig) => {
    let config = { ...defaultConfig, ...inputConfig };
    window.mobrixConfig = config;
  });

