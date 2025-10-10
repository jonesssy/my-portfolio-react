// components/Hero.js
import React from "react";

export default function Hero() {
    return (
        <div className="hero">
            {/* Left side - Profile Image */}
            <div className="hero-image">
                <img
                    src="/media/images/chilling.jpg"
                    alt="profile"
                    id="profileImage"
                />
            </div>

            {/* Right side - Text */}
            <div className="hero-text">
                <h1>Welcome</h1>
                <p>
                    I'm Joni Mitronen, and this is my portfolio.
                    <br />
                    Enjoy!
                </p>
            </div>
        </div>
    );
}
