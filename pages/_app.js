// pages/_app.js
import React from "react";
import '../styles/globals.css';

// If you have global CSS, import it here, e.g. `import '../styles/globals.css'`
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}