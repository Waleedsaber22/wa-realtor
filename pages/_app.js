import "../styles/globals.css";
import "../styles/menuScroll.css";
import Router from "next/router";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Footer, Navbar, Layout } from "../components";
import Head from "next/head";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (e) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (e) => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Layout>
          <header>
            <Navbar />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer>
            <Footer />
          </footer>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
