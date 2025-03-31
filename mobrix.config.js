import DrawerContent from "@src/contents/drawer";
import Footer from "@src/contents/footer";
import Header from "@src/contents/header";

module.exports = {
  header: Header,
  footer: Footer,
  drawer: DrawerContent,
  localization: {
    fallbackLanguage: "en",
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    namespaces: ["common", "page-titles"],
    defaultNamespace: "common",
    supportedLanguages: ["en", "it"],
  },
};
