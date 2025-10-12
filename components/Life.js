// components/Life.js
import React from "react";

const lifeParagraphs = [
    {
        lead: "WHO AM I",
        text: " well I am a soon to graduate Business Information Technology student at Häme University of Applied Sciences, with strong academic performance (avg 4.58). My goal is to transition into software development, particularly backend development, focusing on creating web and mobile applications."
    },
    {
        lead: "CURRENTLY",
        text: "during my studies, I have gained experience with several popular programming languages and their applications. I am also familiar with various database solutions and can utilize them effectively in my programming. I strive to write modular, dynamic, and high-quality code that is easy to maintain and secure. In school projects, I have enjoyed leading teams, managing projects, and, of course, solving problems collaboratively. For project management, we have used industry-standard tools and other common practices involving workflow and coding."
    },
    {
        lead: "ALSO",
        text: "I am a former electrician with seven years of hands-on experience in technical work and participating in various projects. I hold an S2 electrical license and continue to maintain my skills by performing small-scale electrical installations for family and friends. One of my goals is to combine my previous expertise with my new knowledge — to develop automation solutions and add logical functionality to my installations, creating more efficient, eco-friendly, and intelligent solutions for households."
    },
    {
        lead: "AS A COWORKER",
        text: "I am described as precise, organized, and solution-oriented — a team player with experience in both leadership and independent work. I believe in continuous learning and am motivated by applying new technologies to create efficient and practical solutions."
    },
    {
        lead: "IN MY FREETIME",
        text: "I am an active person who gains energy from physical activity, especially Brazilian jiu-jitsu. I also enjoy running and spending time in nature with my family. During the summer festival season, you can often find me in the mosh pit or relaxing at the cottage."
    }
];

const images = [
    { src: "/media/images/meanddog.jpg", alt: "me and my dog" },
    { src: "/media/images/uunojanasse.jpg", alt: "my dogs" },
];

export default function Life() {
    return (
        <section className="life-section">
            <h2 className="life-title">Life</h2>

            <div className="life-content">
                {/* Text Content */}
                <div className="life-text">
                    {lifeParagraphs.map((p, i) => (
                        <p key={i}>
                            <span className="lead-word">{p.lead},</span> {p.text}
                        </p>
                    ))}
                </div>

                {/* Images */}
                <div className="life-images">
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
