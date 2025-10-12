// // components/Projects.js
// import React from "react";

// const projects = [
//     {
//         project: "Movie Review - RESTful API, Website & Mobile App",
//         date: "4 / 2025",
//         description:
//             "This was one our school group projects. We used 'themoviedb' API and stored the movies in MongoDB. Then we used Handlebars for server-side rendered frontend. On our next course, we were tasked to create a mobile app and we figured to use the same backend for it. We needed to make small tweeks to enhance the API endpoints and we created the mobile app with Android Studio, React Native and Expo.",
//         codeLinks: [
//             { href: "https://github.com/joni23008/Backend-Web-Development", text: "Backend Repository" },
//             { href: "https://github.com/Tupolaa/Mobile_project", text: "Frontend Repository" },
//         ],
//         extraLinks: [
//             { href: "https://www.themoviedb.org/", text: "themoviedb - API" },
//             { href: "https://moviereview-472307.lm.r.appspot.com/", text: "Demo" },
//         ],
//         tech: [
//             { src: "/media/images/html.png", alt: "html" },
//             { src: "/media/images/css.png", alt: "css" },
//             { src: "/media/images/javascript.png", alt: "javascript" },
//             { src: "/media/images/nodejs.png", alt: "node.js" },
//             { src: "/media/images/expressjs.png", alt: "express.js" },
//             { src: "/media/images/mongodb.png", alt: "mongodb" },
//             { src: "/media/images/handlebars.png", alt: "handlebars" },
//             { src: "/media/images/react.png", alt: "react" },
//             { src: "/media/images/expo.png", alt: "expo" },
//             { src: "/media/images/android.png", alt: "android" },
//         ],
//     },
//     {
//         project: "Snake - Game",
//         date: "3 / 2025",
//         description:
//             "This was one of my school assignments, we were tasked to create something that showcased our skills with JavaScript. I invented the graphical designs myself and did them in Paint.",
//         codeLinks: [{ href: "https://github.com/jonesssy/Snake", text: "Repository" }],
//         tech: [
//             { src: "/media/images/html.png", alt: "html" },
//             { src: "/media/images/css.png", alt: "css" },
//             { src: "/media/images/javascript.png", alt: "javascript" },
//         ],
//     },
//     {
//         project: "Billing automation with UIPath and Robot Framework for fictional company X",
//         date: "3 / 2025",
//         description:
//             "This school project we did automates the processing of scanned PDF invoices by using UiPath and Robot Framework to extract, validate, and store invoice data in a MySQL database, ensuring accuracy of details like IBAN, reference numbers, and totals.",
//         codeLinks: [
//             { href: "https://github.com/joni23008/Ohjelmistorobotiikka-ja--automaatio--Joni-ja-Vilho-", text: "Repository" },
//         ],
//         tech: [
//             { src: "/media/images/robot-framework.png", alt: "robot framework" },
//             { src: "/media/images/uipath.png", alt: "uipath" },
//             { src: "/media/images/visual-studio.png", alt: "visual studio" },
//             { src: "/media/images/mysql-2.png", alt: "mysql" },
//         ],
//     },
//     {
//         project: "My Portfolio - Website",
//         date: "12 / 2024",
//         description:
//             "This portfolio project significantly enhanced my skills in HTML, CSS, and JavaScript, with a focus on responsive design and interactivity. It was recently refactored to use React.",
//         codeLinks: [{ href: "https://github.com/jonesssy/My-Portfolio", text: "Repository" }],
//         tech: [
//             { src: "/media/images/html.png", alt: "html" },
//             { src: "/media/images/css.png", alt: "css" },
//             { src: "/media/images/javascript.png", alt: "javascript" },
//             { src: "/media/images/react.png", alt: "react" },
//         ],
//     },
//     {
//         project: "Rock, Paper & Scissors - Game",
//         date: "10 / 2024",
//         description:
//             "This project features a MySQL database running in a Docker container for the backend, with the core logic implemented in Python. Essentially, it is a classic Rock, Paper, Scissors game, but enhanced with a scoreboard where the top 10 players can record their initials. This project also serves as an opportunity to delve into unit testing, making it a valuable learning experience. ",
//         codeLinks: [{ href: "https://github.com/jonesssy/Rock-Paper---Scissors", text: "Repository" }],
//         tech: [
//             { src: "/media/images/python.png", alt: "python" },
//             { src: "/media/images/mysql-2.png", alt: "mysql" },
//             { src: "/media/images/docker.png", alt: "docker" },
//         ],
//     },
//     {
//         project: "Downloads Folder Organizer - Automation Script",
//         date: "10 / 2024",
//         description:
//             "This script was a delight to see in action once I got it fully integrated with my Task Scheduler. It continuously monitors my Downloads folder and organizes files into their respective directories. This project has been a practical solution to streamline my workflow, allowing me to focus on more important tasks while leaving repetitive organization to the script. I plan to develop more automation scripts like this to further enhance my productivity. ",
//         codeLinks: [{ href: "https://github.com/jonesssy/Downloads-Organizer", text: "Repository" }],
//         tech: [{ src: "/media/images/python.png", alt: "python" }],
//     },
//     {
//         project: "RESTful API - Floorheating Cable Calculator - JAVA",
//         date: "9 / 2024",
//         description:
//             "Drawing from my experience as an electrician, I created this project to simplify floor heating cable selection. Using Java, Spring Boot, and a MySQL database running in a Docker container, I developed a backend system, complemented by a frontend built with HTML, CSS, and JavaScript. This tool allows users to input area dimensions, installation methods, and power requirements to receive a tailored cable recommendation based on cables by Pistesarjat. It eliminates the need for manual calculations, making the process efficient and user-friendly. ",
//         codeLinks: [
//             { href: "https://github.com/jonesssy/Floorheating-Cable-Calculator", text: "Repository" },
//         ],
//         extraLinks: [
//             { href: "https://pistesarjat.fi/collections/lattialammityskaapelit", text: "Pistesarjat" },
//         ],
//         tech: [
//             { src: "/media/images/java.png", alt: "java" },
//             { src: "/media/images/spring-boot.png", alt: "spring boot" },
//             { src: "/media/images/mysql-2.png", alt: "mysql" },
//             { src: "/media/images/docker.png", alt: "docker" },
//             { src: "/media/images/html.png", alt: "html" },
//             { src: "/media/images/css.png", alt: "css" },
//             { src: "/media/images/javascript.png", alt: "javascript" },
//         ],
//     },
//     {
//         project: "Lego EV3 Line Follower Robot",
//         date: "4 / 2024",
//         description:
//             "In this project, our team developed a LeJOS EV3 Lego line follower robot programmed in Java that communicated with a RESTful server built in Eclipse, successfully using color and ultrasonic sensors for line tracking and obstacle avoidance, integrating keyboard control and music playback, and demonstrating strong object-oriented design and performance on the course track.",
//         codeLinks: [
//             { href: "https://github.com/kl135/palikka-posse-project", text: "Robot Repository" },
//             { href: "https://github.com/NikoLaaks/palikka-posse-server", text: "Server Repository" },
//         ],
//         tech: [
//             { src: "/media/images/eclipse.svg", alt: "eclipse" },
//             { src: "/media/images/java.png", alt: "java" },
//             { src: "/media/images/html.png", alt: "html" },
//         ],
//     },
// ];

// export default function Projects() {
//     return (
//         <main id="projects" className="projects-section">
//             <h2 className="projects-title">Projects</h2>
//             <section className="projects-grid">
//                 {projects.map((project, index) => (
//                     <div key={index} className="project-card">
//                         <div>
//                             <h2 className="project-title">{project.project}</h2>
//                             <p className="project-date">{project.date}</p>
//                             <p className="project-description">{project.description}</p>
//                         </div>

//                         <div className="project-links">
//                             {/* --- Multiple Repositories --- */}
//                             {project.codeLinks &&
//                                 project.codeLinks.map((link, i) => (
//                                     <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
//                                         {link.text}
//                                     </a>
//                                 ))}

//                             {/* --- Optional Extra Links --- */}
//                             {project.extraLinks &&
//                                 project.extraLinks.map((link, i) => (
//                                     <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
//                                         {link.text}
//                                     </a>
//                                 ))}

//                             {/* --- Tech Icons --- */}
//                             <div className="project-tech">
//                                 {project.tech.map((tech, i) => (
//                                     <img key={i} src={tech.src} alt={tech.alt} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </main>
//     );
// }


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
