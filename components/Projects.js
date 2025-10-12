import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
    const { content } = useLanguage();
    // fallback to empty array if anything is missing
    const projectsContent = content.projects || {}; // your JSON top-level key
    const projects = projectsContent.projects || []; // nested array
    const title = projectsContent.title || "Projects";

    return (
        <main id="projects" className="projects-section">
            <h2 className="projects-title">{title}</h2>
            <section className="projects-grid">
                {projects.length === 0 ? (
                    <p>No projects to display.</p>
                ) : (
                    projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div>
                                <h2 className="project-title">{project.project}</h2>
                                <p className="project-date">{project.date}</p>
                                <p className="project-description">{project.description}</p>
                            </div>

                            <div className="project-links">
                                {project.codeLinks?.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.text}
                                    </a>
                                ))}

                                {project.extraLinks?.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.text}
                                    </a>
                                ))}

                                <div className="project-tech">
                                    {project.tech?.map((tech, i) => (
                                        <img key={i} src={tech.src} alt={tech.alt || ""} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </main>
    );
}
