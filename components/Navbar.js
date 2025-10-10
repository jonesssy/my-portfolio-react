// components/Navbar.js
import React from "react";


export default function Navbar() {
  const items = ["home", "life", "skills", "passions", "projects"];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        {items.map((id) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {id}
          </button>
        ))}
      </nav>
    </header>
  );
}
