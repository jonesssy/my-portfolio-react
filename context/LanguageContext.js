import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");
    const [content, setContent] = useState({});

    useEffect(() => {
        async function loadLanguage() {
            const res = await fetch(`/lang/${lang}.json`);
            const data = await res.json();
            setContent(data);
        }
        loadLanguage();
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, content }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
