// components/Skills.js
import React, { useState } from "react";


const skills = [
    // === Technologies ===
    { name: "Python", icons: ["/media/images/python.png"], type: "Technology" },
    { name: "Java", icons: ["/media/images/java.png", "/media/images/spring-boot.png"], type: "Technology" },
    { name: "MySQL", icons: ["/media/images/mysql-2.png"], type: "Technology" },
    { name: "SQL", icons: ["/media/images/sql.png"], type: "Technology" },
    { name: "PHP", icons: ["/media/images/php.png"], type: "Technology" },
    { name: "Docker", icons: ["/media/images/docker.png"], type: "Technology" },
    { name: "HTML", icons: ["/media/images/html.png"], type: "Technology" },
    { name: "CSS", icons: ["/media/images/css.png"], type: "Technology" },
    { name: "JavaScript", icons: ["/media/images/javascript.png"], type: "Technology" },
    { name: "WordPress", icons: ["/media/images/wordpress.png"], type: "Technology" },
    { name: "Windows", icons: ["/media/images/win10.png", "/media/images/win11.png"], type: "Technology" },
    { name: "Linux", icons: ["/media/images/ubuntu.png", "/media/images/kali-linux-1.png", "/media/images/debian.png"], type: "Technology" },
    { name: "Visual Studio Code", icons: ["/media/images/visual-studio-code.png"], type: "Technology" },
    { name: "Visual Studio", icons: ["/media/images/visual-studio.png"], type: "Technology" },
    { name: "Git", icons: ["/media/images/git.png"], type: "Technology" },
    { name: "GitHub", icons: ["/media/images/github-2.png"], type: "Technology" },
    { name: "APIs", icons: ["/media/images/curlys.png"], type: "Technology" },
    { name: "Jira", icons: ["/media/images/jira.png"], type: "Technology" },
    { name: "Confluence", icons: ["/media/images/confluence.png"], type: "Technology" },

    // === Expertises ===
    { name: "Electrical Engineering", icons: ["/media/images/electrician.png"], type: "Expertise" },

    // === Soft Skills ===
    { name: "Leadership", icons: ["/media/images/sergeant.png"], type: "Soft Skill" },

    // === Languages ===
    { name: "Finnish", icons: ["/media/images/finland.png"], type: "Language" },
    { name: "English", icons: ["/media/images/great-britain.png"], type: "Language" },
    // { name: "Swedish", icons: ["/media/images/sweden.png"], type: "Language" },
];

export default function Skills() {
    const [filter, setFilter] = useState("All");

    const types = ["All", ...new Set(skills.map((s) => s.type))];

    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills</h2>

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
                    return (
                        <div
                            key={skill.name}
                            className={`skill-card ${isVisible ? "highlight" : "dimmed"}`}
                        >
                            <div className="skill-icons">
                                {skill.icons.map((icon, idx) => (
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
