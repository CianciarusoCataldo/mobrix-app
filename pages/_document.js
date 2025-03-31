import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head></Head>
      <body>
        <div
          id="preloader"
          style={{
            width: "100vw",
            height: "100vh",
            background: "#2f237f",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: "url(/assets/preloader.svg)",
              width: "30vw",
              height: "10vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
