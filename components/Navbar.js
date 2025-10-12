// Navbar.js
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, content } = useLanguage();
  const items = content?.navbar || [];

  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header>
      <div className="navbar-container">
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={open ? "open" : ""}>
          {items.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}

          <div className="lang-buttons">
            <button
              onClick={() => setLang("fi")}
              className={lang === "fi" ? "active" : ""}
            >
              FIN
            </button>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
            >
              ENG
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
