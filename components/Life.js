import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const images = [
    { src: "/media/images/meanddog.jpg", alt: "me and my dog" }
];

export default function Life() {
    const { content } = useLanguage();
    const lifeContent = content.life || {};
    const lifeParagraphs = lifeContent.paragraphs || [];

    // Track which paragraph is expanded (only one open at a time)
    const [openIndex, setOpenIndex] = useState(null);

    const toggleParagraph = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="life-section">
            <h2 className="life-title">{lifeContent.title || "Life"}</h2>

            <div className="life-content">
                {/* === Text Content === */}
                <div className="life-text">
                    {lifeParagraphs.map((p, i) => {
                        const lead = (p.lead || "").trim();
                        const text = (p.text || "").trim();
                        const isOpen = openIndex === i;

                        // ✨ Show only the first sentence as preview
                        const firstPeriodIndex = text.indexOf(".");
                        const preview =
                            firstPeriodIndex !== -1
                                ? text.slice(0, firstPeriodIndex + 1)
                                : text; // fallback if no period

                        return (
                            <p key={i}>
                                <span className="lead-word">{lead},</span>{" "}
                                {isOpen ? text : preview}{" "}
                                {text.length > preview.length && (
                                    <button
                                        className="read-more-btn"
                                        onClick={() => toggleParagraph(i)}
                                    >
                                        {isOpen ? "Read less" : "Read more"}
                                    </button>
                                )}
                            </p>
                        );
                    })}
                </div>

                {/* === Images === */}
                <div className="life-images">
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
