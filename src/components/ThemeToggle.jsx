import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Cambia tema"
            className="p-2 rounded-md dark-light-btn colore-link"
        >
            {theme === "dark" ? (<FontAwesomeIcon icon={faMoon} />) : (<FontAwesomeIcon icon={faSun} />)}
        </button>
    );
}
