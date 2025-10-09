// components/Passions.js
import React, { useState } from "react";

const slides = [
    {
        id: 1,
        title: "Coding",
        imgSrc: "/media/images/coding.jpg",
        alt: "coding",
        description:
            "Coding and everything you can do with a keyboard in front of a computer is interesting! I have many different projects in mind for myself to carry out, and I will post them in the 'Projects' page as I get them completed.",
    },
    {
        id: 2,
        title: "Brazilian Jiu-Jitsu",
        imgSrc: "/media/images/bjj.png",
        alt: "bjj",
        description:
            "I started Brazilian jiu-jitsu to support my well-being and health. It puts a good strain on the whole body and provides an opportunity to disconnect from everyday life. It also helps me stay smoke-free, a decision I don't regret for a second! I am currently at the level of a blue belt and I participate in competitions whenever I get the chance.",
    },
    {
        id: 3,
        title: "Music",
        imgSrc: "/media/images/music.jpg",
        alt: "music",
        description:
            "I've been making music on an amateur level since I was 16 years old. Electronic Dance Music, rap and currently metal are examples of what genres I produce or am learning to produce. I started playing guitar because I've always wanted to play an instrument. I also write lyrics. Needless to say, I listen to quite a lot of music and all sorts of things. From gentle classic to dark death metal. I usually go to gigs in the winter and spend most of my summer in music festivals.",
    },
    {
        id: 4,
        title: "Fishing",
        imgSrc: "/media/images/fishing.jpg",
        alt: "fishing",
        description:
            "Finnish summers are short, so make the most of it! I fish at the cottage and most of the time I hope to catch pike. I enjoy fish food and my dogs too, so this hobby needs no more justification. And when you don't catch fish, you get to enjoy the fresh air and beautiful scenery.",
    },
];

export default function Passions() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="flex-container-2">
            <div className="carousel">
                <div className="slideshow-container">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`mySlides ${index === currentSlide ? "block" : "hidden"}`}
                        >
                            <img src={slide.imgSrc} alt={slide.alt} />
                            <div className="text">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}

                    <button className="prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>

                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
