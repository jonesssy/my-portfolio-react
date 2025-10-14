import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { content } = useLanguage();
    const skillsContent = content.skills || {};
    const skills = skillsContent.skills || [];

    const [filter, setFilter] = useState("All");

    // === Generate filter buttons dynamically ===
    const types = ["All", ...new Set(skills.map((s) => s.type))];

    // === Filter & reorder skills dynamically ===
    const displayedSkills = useMemo(() => {
        if (filter === "All") return skills;

        // Only return matching skills
        return skills.filter((s) => s.type === filter);
    }, [filter, skills]);

    return (
        <section className="skills-section">
            <h2 className="skills-title">{skillsContent.title || "Skills"}</h2>

            {/* === Filter Buttons === */}
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
                {displayedSkills.map((skill) => {
                    const icons = skill.icons || [];

                    return (
                        <div key={skill.name} className="skill-card">
                            <div className="skill-icons">
                                {icons.map((icon, idx) => (
                                    <img
                                        key={idx}
                                        src={icon}
                                        alt={skill.name}
                                        title={skill.name}
                                    />
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
