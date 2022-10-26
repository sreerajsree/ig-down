import React from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Header from "../components/Header";

const App = ({ Component, pageProps, router }) => {
  const url = `http://localhost:3000/${router.route}`;
  const { theme } = useTheme();
  return (
    <ThemeProvider attribute="class">
      <NextNProgress />
      <ToastContainer theme={theme} />
      <Head>
        <link rel="icon" href="/logo.png" type="image/icon" />
      </Head>
      <DefaultSeo
        titleTemplate="IG-Down | Sreeraj"
        title="Home"
        openGraph={{
          type: "website",
          locale: "en_IE",
          title: "IG-Down | Home",
          url,
          description:
            "IG-Down is an online web tool to help you with downloading Instagram Photos, Videos and IGTV videos. IG-Down is designed to be easy to use on any device, such as, mobile, tablet or computer.",
          site_name: "IG-Down | Home",
          images: [
            {
              url: "/logo.png",
              width: 1200,
              height: 630,
              alt: "Tadashi Logo",
            },
          ],
        }}
        canonical={url}
      />
      <Header/>
    </ThemeProvider>
  );
};

export default App;
