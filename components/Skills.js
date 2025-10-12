import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { content } = useLanguage();
    const skillsContent = content.skills || {};
    const skills = skillsContent.skills || [];

    const [filter, setFilter] = useState("All");

    // Generate filter types dynamically
    const types = ["All", ...new Set(skills.map((s) => s.type))];

    return (
        <section className="skills-section">
            <h2 className="skills-title">{skillsContent.title || "Skills"}</h2>

            {/* === Filter Bar === */}
            <div className="skills-filter">
                {types.map((type) => (
                    <button
                        key={type}
                        className={`filter-btn ${filter === type ? "active" : ""}`}
                        onClick={() => setFilter(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* === Skills Grid === */}
            <div className="skills-grid">
                {skills.map((skill) => {
                    const isVisible = filter === "All" || skill.type === filter;
                    const icons = skill.icons || []; // <--- default to empty array
                    return (
                        <div
                            key={skill.name}
                            className={`skill-card ${isVisible ? "highlight" : "dimmed"}`}
                        >
                            <div className="skill-icons">
                                {icons.map((icon, idx) => (
                                    <img key={idx} src={icon} alt={skill.name} title={skill.name} />
                                ))}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
