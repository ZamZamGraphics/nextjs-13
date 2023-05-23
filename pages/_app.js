// import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
