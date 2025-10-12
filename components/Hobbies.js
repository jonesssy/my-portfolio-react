import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hobbies() {
    const { content } = useLanguage();
    const hobbiesContent = content.hobbies || {};
    const hobbies = hobbiesContent.hobbies || [];

    return (
        <section className="hobbies-section">
            <h2 className="hobbies-title">{hobbiesContent.title || "Hobbies"}</h2>

            <div className="hobbie-grid">
                {hobbies.map((p, index) => (
                    <div key={index} className="hobbie-card">
                        <h3>{p.hobbie}</h3>
                        <img src={p.imgSrc} alt={p.alt || p.hobbie} />
                    </div>
                ))}
            </div>
        </section>
    );
}
