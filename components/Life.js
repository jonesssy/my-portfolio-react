// components/Life.js
import React from "react";

const sections = [
    { title: "Who am I", content: "I am a 26-year-old student from HAMK University of Applied Sciences. I am studying for a Bachelor of Business Administration, and my field of study is computer science and telecommunications." },
    { title: "Roots", content: "I was born and raised in Finland. To be exact, I spent my entire youth on the eastern side of Helsinki, where I made many friends, learned the basics of life, and finally met my future wife. When I started my studies at HAMK University of Applied Sciences, I moved to Hämeenlinna." },
    { title: "Education", content: "I studied to become an electrician and baccalaureate in 2016 at the same time. I deepened my electrician studies in 2019 during the coronavirus pandemic. Finally, in 2023, I thought, 'What would I REALLY like to do for a living?' After studying for a year at HAMK University of Applied Sciences, I think I have found the answer to this question." },
    { title: "Career", content: "My career as an electrician began in 2016 after graduation and continued for 6 consecutive years, excluding my military service. I showed excellent initiative, robust professionalism, and a sense of responsibility. I quickly progressed to the role of site manager and formed a deep trust between the employer and the customers. When I decided to change professions, I had a good understanding of everything and much of it in practice." },
    { title: "Motivation", content: "My family, of course. It includes my wife and our dogs, Uuno and Nasse. Of course, part of my motivation is my desire to advance in my career and my interest in the industry. I want to build a better world for the future." },
    { title: "Future", content: "Speaking of future, my goal within five years is to be a strong expert in software development. At the end of the day, senior software developer is a title I'm going to work hard for and achieve. There is no question of that. Alongside my studies, I also obtained work permits that would allow me to work as a light entrepreneur as an electrician alongside my main career. This way, I can make the most of my years of experience." },
];

const images = [
    { src: "/media/images/meanddog.jpg", alt: "my and my dog" },
    { src: "/media/images/uunojanasse.jpg", alt: "my dogs" },
];

export default function Life() {
    return (
        <section className="life-section">
            <h2 className="life-title">Life</h2>

            <div className="life-content">
                {/* Text Content */}
                <div className="life-text">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3>{section.title}</h3>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* Images */}
                <div className="life-images">
                    {images.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}

