// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Life from "../components/Life";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  const sectionStyle = { maxWidth: 1200, margin: "0 auto", padding: "0" }; // padding-top includes navbar + breathing room

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64 /* reserve navbar space */ }}>
        <section id="home" style={{ ...sectionStyle, paddingTop: 20 }}>
          <Hero />
        </section>
        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>
        <section id="skills" style={sectionStyle}>
          <Skills />
        </section>
        <section id="life" style={sectionStyle}>
          <Life />
        </section>
        <section id="hobbies" style={sectionStyle}>
          <Hobbies />
        </section>
      </main>

      <Footer />
    </>
  );
}
