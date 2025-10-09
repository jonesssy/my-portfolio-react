// components/Skills.js
import React from "react";

const hardSkills = [
    { name: "Python", icons: ["/media/images/python.png"] },
    { name: "Java", icons: ["/media/images/java.png", "/media/images/spring-boot.png"] },
    { name: "MySQL", icons: ["/media/images/mysql-2.png"] },
    { name: "SQL", icons: ["/media/images/sql.png"] },
    { name: "PHP", icons: ["/media/images/php.png"] },
    { name: "Docker", icons: ["/media/images/docker.png"] },
    { name: "HTML", icons: ["/media/images/html.png"] },
    { name: "CSS", icons: ["/media/images/css.png"] },
    { name: "JavaScript", icons: ["/media/images/javascript.png"] },
    { name: "WordPress", icons: ["/media/images/wordpress.png"] },
    { name: "Windows", icons: ["/media/images/win10.png", "/media/images/win11.png"] },
    { name: "Linux", icons: ["/media/images/ubuntu.png", "/media/images/kali-linux-1.png", "/media/images/debian.png"] },
    { name: "Visual Studio Code", icons: ["/media/images/visual-studio-code.png"] },
    { name: "Visual Studio", icons: ["/media/images/visual-studio.png"] },
    { name: "Git", icons: ["/media/images/git.png"] },
    { name: "GitHub", icons: ["/media/images/github-2.png"] },
    { name: "APIs", icons: ["/media/images/curlys.png"] },
    { name: "Jira", icons: ["/media/images/jira.png"] },
    { name: "Confluence", icons: ["/media/images/confluence.png"] },
];

const softSkills = ["Leadership", "Work Ethics", "Teamwork", "Time Management", "Problem-solving"];

const languages = [
    { name: "Finnish", icon: "/media/images/finland.png" },
    { name: "English", icon: "/media/images/great-britain.png" },
    { name: "Swedish", icon: "/media/images/sweden.png" },
];

const certifications = [
    "Occupational Safety Card",
    "Electrical Work Safety Card",
    "First Aid Course EA 1",
    "Class B Driver's License",
];

export default function Skills() {
    return (
        <section className="flex flex-col md:flex-row gap-10 p-6">
            {/* Experience & Education */}
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <p>
                    3/2021 - 7/2023<br />
                    Electrician — <a href="https://franklinoy.fi/" className="text-red-600 underline">Franklin Oy</a>
                </p>
                <p>
                    8/2016 - 3/2021<br />
                    Electrician — <a href="https://tehomen.fi/" className="text-red-600 underline">Tehomen Oy</a>
                </p>

                <h2 className="text-2xl font-semibold mt-6">Education</h2>
                <p>
                    8/2023 - <br />
                    Bachelor of Business Administration<br />
                    Data Processing — HAMK University of Applied Sciences
                </p>
                <p>
                    9/2019 - 12/2020<br />
                    Electrician — Further Qualification for Electricians — Taitotalo Vocational School
                </p>
                <p>
                    3/2017 - 6/2018<br />
                    Sergeant — Leadership-training — Finnish Defence Forces, Coastal Brigade
                </p>
                <p>
                    8/2013 - 6/2016<br />
                    Electrician — Vocational upper secondary dual qualification in Electrical Engineering and Automation Technology — Stadin Vocational School
                </p>
            </div>

            {/* Hard Skills */}
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Hard Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {hardSkills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md shadow-sm">
                            {skill.icons.map((icon, idx) => (
                                <img key={idx} src={icon} alt={skill.name} className="w-5 h-5" title={skill.name} />
                            ))}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <h2 className="text-2xl font-semibold mt-6">Soft Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill) => (
                        <div key={skill} className="bg-blue-100 px-3 py-1 rounded-md shadow-sm">{skill}</div>
                    ))}
                </div>

                {/* Certifications */}
                <h3 className="text-xl font-semibold mt-6">Certifications</h3>
                <ul className="list-disc list-inside">
                    {certifications.map((cert) => (
                        <li key={cert}>{cert}</li>
                    ))}
                </ul>

                {/* Languages */}
                <h3 className="text-xl font-semibold mt-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                        <div key={lang.name} className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-md shadow-sm">
                            <img src={lang.icon} alt={lang.name} className="w-5 h-5" title={lang.name} />
                            {lang.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
