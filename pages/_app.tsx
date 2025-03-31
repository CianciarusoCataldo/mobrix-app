import "@styles/core/global.css";
import "@styles/theme.css";
import MbxApp from "@root/src/core/MbxApp";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.addEventListener("animationend", () => {
        preloader.remove();
      });
      setTimeout(() => {
        preloader.style.animation = "fadeOut 0.5s forwards";
      }, 300);
    }
  }, []);

  return (
    <MbxApp>
      <Component {...pageProps} />
    </MbxApp>
  );
};

export default App;
