// components/Footer.js
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <p>joni.mitronen@gmail.com</p>
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
            </div>

            <p>©{new Date().getFullYear()} Joni Mitronen. — All rights reserved.</p>
        </footer>
    );
}