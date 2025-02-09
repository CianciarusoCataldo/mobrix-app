import "@src/localization";
import "@styles/core/global.css";
import "@styles/theme.css";
import MainProvider from "@src/providers/MainProvider";
import { store } from "@store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Container } from "mobrix-ui";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container data-mbx-page>
      <Provider store={store}>
        <MainProvider>
          <Component {...pageProps} />
        </MainProvider>
      </Provider>
    </Container>
  );
};

export default App;
