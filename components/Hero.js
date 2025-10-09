// components/Hero.js
import React from "react";

export default function Hero() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: 40, margin: 0 }}>Welcome</h1>
                <p style={{ marginTop: 10 }}>I'm Joni Mitronen, and this is my portfolio.<br />Enjoy!</p>
            </div>
        </div>
    );
}
