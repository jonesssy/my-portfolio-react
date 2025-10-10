// pages/_app.js
import React from "react";
import '../styles/globals.css';
import "../styles/navbar.css";
import "../styles/hero.css"; // ✅ import your CSS
import "../styles/life.css";
import "../styles/skills.css";
import "../styles/projects.css";
import "../styles/footer.css";


// If you have global CSS, import it here, e.g. `import '../styles/globals.css'`
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}