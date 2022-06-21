import NextDocument, { Html, Head, Main, NextScript, DocumentContext} from "next/document";

export default class MyDocument extends NextDocument {
    static getInitialProps(ctx: DocumentContext) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="tr">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />

                    {/* base */}
                    <meta charSet="utf-8" />
                    <meta name="robots" content="follow, index" />

                    {/* pwa */}
                    <link href="/static/icons/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/icons/icon-apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/icons/icon-favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/icons/icon-favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#ffffff"
                        href="/static/icons/icon-safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                </Head>

                <body
                    className="bg-white text-zinc-600 antialiased
      dark:bg-zinc-900 dark:text-zinc-400"
                >
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
