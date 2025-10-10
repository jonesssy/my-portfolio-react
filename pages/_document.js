// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* --- Meta Tags --- */}
                <meta charSet="UTF-8" />
                <meta
                    name="description"
                    content="This website provides a portfolio of a young upcoming IT expert from Finland"
                />
                <meta name="author" content="Joni Mitronen" />
                <meta
                    name="keywords"
                    content="Portfolio, IT, Backend, Javascript, Java, Python, Student, Software Developer, Finland, Finnish"
                />
                {/* --- Favicon --- */}
                <link rel="icon" type="image/png" sizes="32x32" href="/media/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
