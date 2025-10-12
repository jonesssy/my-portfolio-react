// components/Footer.js
import React from "react";

export default function Footer() {
    return (
        <footer>
            <p>joni.mitronen@gmail.com</p>
            <div className="footer-top">

                <a
                    href="https://github.com/jonesssy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/media/images/github-2.png"
                        alt="GitHub"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/joni-mitronen-56127138a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/media/images/linkedin.png"
                        alt="LinkedIn"
                    />
                </a>
            </div>

            <p>©{new Date().getFullYear()} Joni Mitronen. — All rights reserved.</p>
        </footer>
    );
}