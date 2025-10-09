// components/Navbar.js
import React from "react";

export default function Navbar() {
  const items = ["home", "life", "skills", "passions", "projects"];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full flex justify-center items-end gap-8 border-b-2 border-red-600 bg-white py-1">
        {items.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="
              uppercase text-black text-2xl 
              border-b-2 border-red-600 
              px-2 py-0 
              bg-white 
              transition-all duration-400
              hover:bg-red-600 hover:text-white hover:px-5
            "
          >
            {id}
          </button>
        ))}
      </nav>
    </header>
  );
}
