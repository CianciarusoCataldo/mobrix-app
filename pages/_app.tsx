import "@src/localization";
import MainProvider from "@src/providers/MainProvider";
import { appWithTranslation } from "next-i18next";
import { store } from "@store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
