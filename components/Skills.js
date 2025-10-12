// import React, { useState } from "react";
// import { useLanguage } from "../context/LanguageContext";

// export default function Skills() {
//     const { content } = useLanguage();
//     const skillsContent = content.skills || {};
//     const skills = skillsContent.skills || [];

//     const [filter, setFilter] = useState("All");

//     // Generate filter types dynamically
//     const types = ["All", ...new Set(skills.map((s) => s.type))];

//     return (
//         <section className="skills-section">
//             <h2 className="skills-title">{skillsContent.title || "Skills"}</h2>

//             {/* === Filter Bar === */}
//             <div className="skills-filter">
//                 {types.map((type) => (
//                     <button
//                         key={type}
//                         className={`filter-btn ${filter === type ? "active" : ""}`}
//                         onClick={() => setFilter(type)}
//                     >
//                         {type}
//                     </button>
//                 ))}
//             </div>

//             {/* === Skills Grid === */}
//             <div className="skills-grid">
//                 {skills.map((skill) => {
//                     const isVisible = filter === "All" || skill.type === filter;
//                     const icons = skill.icons || []; // <--- default to empty array
//                     return (
//                         <div
//                             key={skill.name}
//                             className={`skill-card ${isVisible ? "highlight" : "dimmed"}`}
//                         >
//                             <div className="skill-icons">
//                                 {icons.map((icon, idx) => (
//                                     <img key={idx} src={icon} alt={skill.name} title={skill.name} />
//                                 ))}
//                             </div>
//                             <span className="skill-name">{skill.name}</span>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }


import React, { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { content } = useLanguage();
    const skillsContent = content.skills || {};
    const skills = skillsContent.skills || [];

    const [filter, setFilter] = useState("All");

    // === Generate filter buttons dynamically ===
    const types = ["All", ...new Set(skills.map((s) => s.type))];

    // === Reorder skills dynamically based on filter ===
    const displayedSkills = useMemo(() => {
        if (filter === "All") return skills; // Default order

        // Move filtered skills to front, but preserve relative order
        const matching = skills.filter((s) => s.type === filter);
        const others = skills.filter((s) => s.type !== filter);
        return [...matching, ...others];
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
                    const isVisible = filter === "All" || skill.type === filter;
                    const icons = skill.icons || [];

                    return (
                        <div
                            key={skill.name}
                            className={`skill-card ${isVisible ? "highlight" : "dimmed"}`}
                        >
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



