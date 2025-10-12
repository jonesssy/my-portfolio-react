// components/Life.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const images = [
    { src: "/media/images/meanddog.jpg", alt: "me and my dog" },
    { src: "/media/images/uunojanasse.jpg", alt: "my dogs" },
];

export default function Life() {
    const { content } = useLanguage();
    const lifeContent = content.life || {};
    const lifeParagraphs = lifeContent.paragraphs || [];

    return (
        <section className="life-section">
            <h2 className="life-title">{lifeContent.title || "Life"}</h2>

            <div className="life-content">
                {/* Text Content */}
                <div className="life-text">
                    {lifeParagraphs.map((p, i) => (
                        <p key={i}>
                            <span className="lead-word">{p.lead},</span> {p.text}
                        </p>
                    ))}
                </div>

                {/* Images */}
                <div className="life-images">
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
