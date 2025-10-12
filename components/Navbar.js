// import React, { useState } from "react";

// export default function Navbar() {
//   const items = ["home", "life", "skills", "passions", "projects"];
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false); // close drawer on click
//   };

//   return (
//     <header>
//       <div className="navbar-container">
//         {/* Hamburger button */}
//         <button
//           className="hamburger"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           <div className={`bar ${isOpen ? "open" : ""}`}></div>
//           <div className={`bar ${isOpen ? "open" : ""}`}></div>
//           <div className={`bar ${isOpen ? "open" : ""}`}></div>
//         </button>

//         {/* Nav links */}
//         <nav className={isOpen ? "open" : ""}>
//           {items.map((id) => (
//             <button key={id} onClick={() => scrollTo(id)}>
//               {id}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }


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
          {items.map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id}
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
