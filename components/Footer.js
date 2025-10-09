// // components/Footer.js
// import React from "react";

// export default function Footer() {
//     return (
//         <footer className="bg-black text-white border-t-2 border-red-600 shadow-[0_0_20px_rgba(255,255,255,1)] flex flex-col items-center justify-center gap-5 py-2 z-10">
//             <p>©{new Date().getFullYear()} Joni Mitronen. — All rights reserved.</p>
//         </footer>
//     );
// }

// components/Footer.js
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-2 border-red-600 shadow-[0_0_20px_rgba(255,255,255,1)] flex flex-col items-center justify-center gap-5 py-4 z-10">

            {/* Email + GitHub side by side */}
            <div className="flex items-center gap-4">
                <p className="text-xl m-0">joni.mitronen@gmail.com</p>
                <a
                    href="https://github.com/j0Z3SSy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                >
                    <img
                        src="/media/images/github-2.png"
                        alt="GitHub"
                        className="w-12 h-12 object-contain"
                    />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm">©{new Date().getFullYear()} Joni Mitronen. — All rights reserved.</p>
        </footer>
    );
}
