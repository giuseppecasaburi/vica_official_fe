import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // 1. Verifica preferenza di sistema
        if (window.matchMedia) {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

            if (prefersDark) return "dark";
            if (prefersLight) return "light";
        }

        // 2. Nessuna preferenza → default = light
        return "light";
    });

    // Aggiorna l'attributo HTML
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // Toggle manuale
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
