import React, { useState } from "react";

export default function Navbar() {
  const items = ["home", "life", "skills", "passions", "projects"];
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close drawer on click
  };

  return (
    <header>
      <div className="navbar-container">
        {/* Hamburger button */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </button>

        {/* Nav links */}
        <nav className={isOpen ? "open" : ""}>
          {items.map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
