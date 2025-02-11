import "@localization/index";
import "@styles/core/global.css";
import "@styles/theme.css";
import MbxApp from "@src/providers/MbxApp";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <MbxApp>
    <Component {...pageProps} />
  </MbxApp>
);

export default App;
