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
            { src: "../media/images/html.png", alt: "html" },
            { src: "../media/images/css.png", alt: "css" },
            { src: "../media/images/javascript.png", alt: "javascript" },
        ],
        carousel: [
            { type: "img", src: "../media/images/portfolio-v1.png", alt: "version 1" },
            { type: "img", src: "../media/images/portfolio-v2v3.png", alt: "version 2 and 3" },
            { type: "img", src: "../media/images/portfolio-v4.png", alt: "version 4" },
        ],
    },
    {
        title: "Rock, Paper & Scissors - Game",
        date: "10 / 2024",
        description:
            "This project remains a work in progress as I aim to transform it into a RESTful API. Currently, it features a MySQL database running in a Docker container for the backend, with the core logic implemented in Python. Essentially, it is a classic Rock, Paper, Scissors game, but enhanced with a scoreboard where the top 10 players can record their initials. This project also serves as an opportunity to delve into unit testing, making it a valuable learning experience.",
        codeLink: "https://github.com/j0Z3SSy/Rock-Paper---Scissors",
        tech: [
            { src: "../media/images/python.png", alt: "python" },
            { src: "../media/images/mysql-2.png", alt: "mysql" },
            { src: "../media/images/docker.png", alt: "docker" },
        ],
        carousel: [
            { type: "video", src: "../media/videos/rps-video.mp4" },
        ],
    },
    {
        title: "Downloads Folder Organizer - Automation Script",
        date: "10 / 2024",
        description:
            "This script was a delight to see in action once I got it fully integrated with my Task Scheduler. It continuously monitors my Downloads folder and organizes files into their respective directories. This project has been a practical solution to streamline my workflow, allowing me to focus on more important tasks while leaving repetitive organization to the script. I plan to develop more automation scripts like this to further enhance my productivity.",
        codeLink: "https://github.com/j0Z3SSy/Downloads-Organizer",
        tech: [
            { src: "../media/images/python.png", alt: "python" },
        ],
        carousel: [
            { type: "video", src: "../media/videos/downloadsorganizer-video.mp4" },
            { type: "img", src: "../media/images/downloadsorganizer-folders.png", alt: "folders" },
            { type: "img", src: "../media/images/downloadsorganizer-logs.png", alt: "logs" },
        ],
    },
    {
        title: "Restful API - Floorheating Cable Calculator",
        date: "9 / 2024",
        description:
            "Drawing from my experience as an electrician, I created this project to simplify floor heating cable selection. Using Java, Spring Boot, and a MySQL database running in a Docker container, I developed a backend system, complemented by a frontend built with HTML, CSS, and JavaScript. This tool allows users to input area dimensions, installation methods, and power requirements to receive a tailored cable recommendation based on cables by Pistesarjat. It eliminates the need for manual calculations, making the process efficient and user-friendly.",
        codeLink: "https://github.com/j0Z3SSy/Floorheating-Cable-Calculator",
        extraLink: { href: "https://pistesarjat.fi/collections/lattialammityskaapelit", text: "Pistesarjat" },
        tech: [
            { src: "../media/images/java.png", alt: "java" },
            { src: "../media/images/spring-boot.png", alt: "spring boot" },
            { src: "../media/images/mysql-2.png", alt: "mysql" },
            { src: "../media/images/docker.png", alt: "docker" },
            { src: "../media/images/html.png", alt: "html" },
            { src: "../media/images/css.png", alt: "css" },
            { src: "../media/images/javascript.png", alt: "javascript" },
        ],
        carousel: [
            { type: "video", src: "../media/videos/floorheating-video.mp4" },
            { type: "img", src: "../media/images/floorheating-client.png", alt: "client side" },
            { type: "img", src: "../media/images/floorheating-database.png", alt: "database overview" },
        ],
    },
];

export default function Projects() {
    return (
        <main>
            <section className="flex flex-wrap justify-center gap-10 p-5">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center max-w-lg bg-gray-900 text-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="mb-2">{project.date}</p>
                        <p className="mb-3">{project.description}</p>
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 underline mb-2"
                        >
                            Code
                        </a>
                        {project.extraLink && (
                            <a
                                href={project.extraLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500 underline mb-2"
                            >
                                {project.extraLink.text}
                            </a>
                        )}
                        <div className="flex mb-3">
                            {project.tech.map((tech, i) => (
                                <img
                                    key={i}
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="w-9 h-9 mx-1"
                                />
                            ))}
                        </div>
                        <div className="carousel w-full">
                            {project.carousel.map((item, i) => (
                                <div key={i} className="mb-3">
                                    {item.type === "img" && (
                                        <img src={item.src} alt={item.alt} className="w-full rounded" />
                                    )}
                                    {item.type === "video" && (
                                        <video controls className="w-full rounded">
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
