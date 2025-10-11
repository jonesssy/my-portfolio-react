// components/Skills.js
import React, { useState } from "react";

const skills = [
    // 🧠 Programming Languages
    { name: "JavaScript", icons: ["/media/images/javascript.png"], type: "Programming Language" },
    { name: "Java", icons: ["/media/images/java.png"], type: "Programming Language" },
    { name: "Python", icons: ["/media/images/python.png"], type: "Programming Language" },
    { name: "PHP", icons: ["/media/images/php.png"], type: "Programming Language" },
    { name: "SQL", icons: ["/media/images/sql.png"], type: "Programming Language" },

    // ⚙️ Frameworks
    { name: "Express.js", icons: ["/media/images/expressjs.png"], type: "Framework" },
    { name: "Java Spring Boot", icons: ["/media/images/spring-boot.png"], type: "Framework" },
    { name: "React (CSR)", icons: ["/media/images/react.png"], type: "Framework" },
    { name: "React Native", icons: ["/media/images/react.png"], type: "Framework" },
    { name: "Handlebars (SSR)", icons: ["/media/images/handlebars.png"], type: "Framework" },
    { name: "Node.js", icons: ["/media/images/nodejs.png"], type: "Framework" },
    { name: "Expo", icons: ["/media/images/expo.png"], type: "Framework" },
    { name: "WordPress", icons: ["/media/images/wordpress.png"], type: "Framework" },
    { name: "Robot Framework", icons: ["/media/images/robot-framework.png"], type: "Framework" },

    // 🗄️ Databases
    { name: "MySQL", icons: ["/media/images/mysql-2.png"], type: "Database" },
    { name: "MongoDB", icons: ["/media/images/mongodb.png"], type: "Database" },

    // 🧰 Tools
    { name: "Postman", icons: ["/media/images/postman.png"], type: "Tool" },
    { name: "Git", icons: ["/media/images/git.png"], type: "Tool" },
    { name: "GitHub", icons: ["/media/images/github-2.png"], type: "Tool" },
    { name: "Visual Studio Code", icons: ["/media/images/visual-studio-code.png"], type: "Tool" },
    { name: "Visual Studio", icons: ["/media/images/visual-studio.png"], type: "Tool" },
    { name: "Android Studio", icons: ["/media/images/android.png"], type: "Tool" },
    { name: "Docker", icons: ["/media/images/docker.png"], type: "Tool" },
    { name: "VirtualBox", icons: ["/media/images/virtualbox.png"], type: "Tool" },
    { name: "GitHub Copilot", icons: ["/media/images/copilot.png"], type: "Tool" },
    { name: "ChatGPT", icons: ["/media/images/chatgpt.png"], type: "Tool" },

    // ☁️ Cloud
    { name: "Google Cloud", icons: ["/media/images/googlecloud.png"], type: "Cloud" },
    { name: "Railway", icons: ["/media/images/railway.png"], type: "Cloud" },
    { name: "Vercel", icons: ["/media/images/vercel.svg"], type: "Cloud" },

    // 💻 Operating Systems
    { name: "Windows 10", icons: ["/media/images/win10.png"], type: "Operating System" },
    { name: "Windows 11", icons: ["/media/images/win11.png"], type: "Operating System" },
    { name: "Linux Ubuntu", icons: ["/media/images/ubuntu.png"], type: "Operating System" },
    { name: "Linux Ubuntu Server", icons: ["/media/images/ubuntu.png"], type: "Operating System" },

    // 🧩 Project Management
    { name: "Jira", icons: ["/media/images/jira.png"], type: "Project Management" },
    { name: "Confluence", icons: ["/media/images/confluence.png"], type: "Project Management" },

    // 🌐 Web Technologies
    { name: "HTML", icons: ["/media/images/html.png"], type: "Web Technology" },
    { name: "CSS", icons: ["/media/images/css.png"], type: "Web Technology" },
    { name: "APIs", icons: ["/media/images/curlys.png"], type: "Web Technology" },

    // 🏠 IoT
    { name: "Home Assistant", icons: ["/media/images/home-assistant.png"], type: "IoT" },
    { name: "Zigbee", icons: ["/media/images/zigbee.png"], type: "IoT" },
    { name: "Z-Wave", icons: ["/media/images/z-wave.png"], type: "IoT" },

    // 💼 Expertises
    { name: "Data Processing", icons: ["/media/images/coding.png"], type: "Expertise" },
    { name: "Electrical Engineering", icons: ["/media/images/electrician.png", "/media/images/dali.png", "/media/images/knx.png"], type: "Expertise" },

    // 💬 Soft Skills
    { name: "SCRUM", icons: ["/media/images/scrum.png"], type: "Soft Skill" },
    { name: "Leadership", icons: ["/media/images/sergeant.png", "/media/images/leadership.png"], type: "Soft Skill" },
    { name: "Teamwork", icons: ["/media/images/teamwork.png"], type: "Soft Skill" },
    { name: "Creativity", icons: ["/media/images/creativity.png"], type: "Soft Skill" },
    { name: "Organization", icons: ["/media/images/organization.png"], type: "Soft Skill" },
    { name: "Independence", icons: ["/media/images/independence.png"], type: "Soft Skill" },
    { name: "Problem Solving", icons: ["/media/images/problem-solving.png"], type: "Soft Skill" },

    // 🗣️ Languages 
    { name: "Finnish", icons: ["/media/images/finland.png"], type: "Language" },
    { name: "English", icons: ["/media/images/great-britain.png"], type: "Language" },
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
