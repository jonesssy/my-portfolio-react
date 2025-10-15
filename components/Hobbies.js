import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hobbies() {
    const { content } = useLanguage();
    const hobbiesContent = content.hobbies || {};
    const hobbies = hobbiesContent.hobbies || [];

    // Track which hobbie is expanded
    const [openIndex, setOpenIndex] = useState(null);

    const toggleHobbie = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="hobbies-section">
            <h2 className="hobbies-title">{hobbiesContent.title || "Hobbies"}</h2>

            {/* === Show expanded text here === */}
            {openIndex !== null && (
                <p className="hobbie-text-expanded">{hobbies[openIndex].text}</p>
            )}

            <div className="hobbie-grid">
                {hobbies.map((p, index) => (
                    <div
                        key={index}
                        className="hobbie-card"
                        onClick={() => toggleHobbie(index)}
                        style={{ cursor: "pointer" }}
                    >
                        <h3>{p.hobbie}</h3>
                        <img src={p.imgSrc} alt={p.alt || p.hobbie} />
                    </div>
                ))}
            </div>
        </section>
    );
}
