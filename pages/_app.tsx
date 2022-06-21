import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head';
import config from "../config";
import Header from "../components/header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <link rel="canonical" href={config.url} />

          {/* facebook */}
          <meta property="og:url" content={config.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={config.description} />

          {/* twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={config.url} />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
        </Head>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
        </div>
          <Footer />
      </ThemeProvider>
  );
}

export default MyApp
