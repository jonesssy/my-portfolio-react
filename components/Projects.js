// components/Projects.js
import React from "react";


const projects = [
    {
        title: "My Portfolio - Website",
        date: "12 / 2024",
        description:
            "This portfolio project significantly enhanced my skills in HTML, CSS, and JavaScript, with a focus on responsive design and interactivity. I learned how to create a visually appealing and user-friendly website, guiding it from concept to completion. This website serves as a showcase of my coding abilities. While it remains an ongoing project, starting with a strong foundation has made it rewarding to revisit and improve over time.",
        codeLink: "https://github.com/j0Z3SSy/My-Portfolio",
        tech: [
            { src: "/media/images/html.png", alt: "html" },
            { src: "/media/images/css.png", alt: "css" },
            { src: "/media/images/javascript.png", alt: "javascript" },
        ],
    },
    {
        title: "Rock, Paper & Scissors - Game",
        date: "10 / 2024",
        description:
            "This project remains a work in progress as I aim to transform it into a RESTful API. Currently, it features a MySQL database running in a Docker container for the backend, with the core logic implemented in Python. Essentially, it is a classic Rock, Paper, Scissors game, but enhanced with a scoreboard where the top 10 players can record their initials. This project also serves as an opportunity to delve into unit testing, making it a valuable learning experience.",
        codeLink: "https://github.com/j0Z3SSy/Rock-Paper---Scissors",
        tech: [
            { src: "/media/images/python.png", alt: "python" },
            { src: "/media/images/mysql-2.png", alt: "mysql" },
            { src: "/media/images/docker.png", alt: "docker" },
        ],
    },
    {
        title: "Downloads Folder Organizer - Automation Script",
        date: "10 / 2024",
        description:
            "This script was a delight to see in action once I got it fully integrated with my Task Scheduler. It continuously monitors my Downloads folder and organizes files into their respective directories. This project has been a practical solution to streamline my workflow, allowing me to focus on more important tasks while leaving repetitive organization to the script. I plan to develop more automation scripts like this to further enhance my productivity.",
        codeLink: "https://github.com/j0Z3SSy/Downloads-Organizer",
        tech: [{ src: "/media/images/python.png", alt: "python" }],
    },
    {
        title: "Restful API - Floorheating Cable Calculator",
        date: "9 / 2024",
        description:
            "Drawing from my experience as an electrician, I created this project to simplify floor heating cable selection. Using Java, Spring Boot, and a MySQL database running in a Docker container, I developed a backend system, complemented by a frontend built with HTML, CSS, and JavaScript. This tool allows users to input area dimensions, installation methods, and power requirements to receive a tailored cable recommendation based on cables by Pistesarjat. It eliminates the need for manual calculations, making the process efficient and user-friendly.",
        codeLink: "https://github.com/j0Z3SSy/Floorheating-Cable-Calculator",
        extraLink: {
            href: "https://pistesarjat.fi/collections/lattialammityskaapelit",
            text: "Pistesarjat",
        },
        tech: [
            { src: "/media/images/java.png", alt: "java" },
            { src: "/media/images/spring-boot.png", alt: "spring boot" },
            { src: "/media/images/mysql-2.png", alt: "mysql" },
            { src: "/media/images/docker.png", alt: "docker" },
            { src: "/media/images/html.png", alt: "html" },
            { src: "/media/images/css.png", alt: "css" },
            { src: "/media/images/javascript.png", alt: "javascript" },
        ],
    },
];

export default function Projects() {
    return (
        <main id="projects" className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <section className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-date">{project.date}</p>
                            <p className="project-description">{project.description}</p>
                        </div>

                        <div className="project-links">
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                Code
                            </a>
                            {project.extraLink && (
                                <a
                                    href={project.extraLink.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.extraLink.text}
                                </a>
                            )}
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <img key={i} src={tech.src} alt={tech.alt} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}