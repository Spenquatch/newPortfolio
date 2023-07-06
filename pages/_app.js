import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "../public/css/basic.css";
import "../public/css/layout.css";
import "../public/css/magnific-popup.css";
import "../public/css/animate.css";
import "../public/css/jarallax.css";
import "../public/css/swiper.css";
import "../public/css/fontawesome.css";
import "../public/css/brands.css";
import "../public/css/solid.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Cvio - Resume/CV React NextJS Template</title>

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
