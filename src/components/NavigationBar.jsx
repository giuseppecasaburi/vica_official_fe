// NavigationBar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavHidden, setIsNavHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            // Se siamo in cima alla pagina, mostra sempre la navbar
            if (currentScroll <= 0) {
                setIsNavHidden(false);
                setLastScroll(currentScroll);
                return;
            }

            if (currentScroll > lastScroll) {
                // Scroll verso il basso - nascondi navbar
                setIsNavHidden(true);
            } else {
                // Scroll verso l'alto - mostra navbar
                setIsNavHidden(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup: rimuovi l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className={isNavHidden ? 'hidden' : ''}>
                <div className="contenitore">
                    <img src="./Documento224.png" alt="" style={{ mixBlendMode: "color-burn" }} />

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation Links */}
                    <div className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                        <Link to={"/catalogues"} className="link-header nav-links" onClick={closeMenu}>Catalogo</Link>
                        <Link to={"/"} className="link-header nav-links" onClick={closeMenu}>Accessori</Link>
                        <Link to={"/catalogues"} className="link-header nav-links" onClick={closeMenu}>Download</Link>
                        <Link to={"/company"} className="link-header nav-links" onClick={closeMenu}>Azienda</Link>
                        <Link to={"/contacts"} className="link-header nav-links" onClick={closeMenu}>Contatti</Link>
                        <ThemeToggle />
                    </div>

                    {/* Overlay */}
                    {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;