// components/Hero.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
    const { content } = useLanguage();
    const hero = content.hero || {};

    return (
        <div className="hero">
            <div className="hero-image">
                <img src="/media/images/chilling.jpg" alt="profile" id="profileImage" />
            </div>

            {/* Right side - Text */}
            <div className="hero-text">
                <h1>{hero.welcome}</h1>
                <p>{hero.p1}<span className="highlight-name">{hero.name}</span>{hero.p2}</p>
            </div>
        </div>
    );
}
