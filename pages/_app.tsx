import "@localization/index";
import "@styles/core/global.css";
import "@styles/theme.css";
import Footer from "@contents/footer";
import Header from "@contents/header";
import AppContainer from "@molecules/AppContainer";
import AppDrawer from "@molecules/AppDrawer";
import MainProvider from "@src/providers/MainProvider";
import { store } from "@store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => (
  <div data-mbx-app-container>
    <Provider store={store}>
      <MainProvider>
        <AppDrawer />
        <AppContainer data-mbx-app-header wrapper="header">
          <Header />
        </AppContainer>
        <AppContainer data-mbx-app-page>
          <Component {...pageProps} />
        </AppContainer>
        <AppContainer data-mbx-app-footer wrapper="footer">
          <Footer />
        </AppContainer>
      </MainProvider>
    </Provider>
  </div>
);

export default App;
