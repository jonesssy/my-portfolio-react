import React from "react";

const passions = [
    { passion: "Coding", imgSrc: "/media/images/coding.jpg", alt: "coding" },
    { passion: "Brazilian Jiu-Jitsu", imgSrc: "/media/images/bjj.png", alt: "bjj" },
    { passion: "Music", imgSrc: "/media/images/music.jpg", alt: "music" },
    { passion: "Fishing", imgSrc: "/media/images/fishing.jpg", alt: "fishing" },
];

export default function Passions() {
    return (
        <section className="passions-section">
            <h2 className="passions-title">Passions</h2>

            <div className="passion-grid">
                {passions.map((p, index) => (
                    <div key={index} className="passion-card">
                        <h3>{p.passion}</h3>
                        <img src={p.imgSrc} alt={p.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}
