import Head from "next/head";
import { Fragment } from "react";
import Script from "next/script";
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
import "../public/css/github-projects.css";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
{/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script id="tag-url"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=G-NSBRY4KZ0S`}
            />
            <Script
              id="tag-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-NSBRY4KZ0S', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
        <link
          id="google-font"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />

      <Head>
        <title>Spenser McConnell — AI Systems Builder</title>
        <meta name="description" content="I build AI systems with real context and clean integrations. Technical product manager and hands-on builder focused on agent workflows, internal tools, and automation that actually gets used." />
        <meta name="keywords" content="AI systems, agent workflows, automation, technical product manager, AI architect, internal tools, Indianapolis" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
