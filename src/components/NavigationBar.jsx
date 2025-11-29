import { Link } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav>
                <div className="contenitore">
                    <img src="./Documento2.webp" alt="" style={{ mixBlendMode: "color-burn" }} />

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
                        <Link to={"/"} className="link-header nav-links" onClick={closeMenu}>Catalogo</Link>
                        <Link to={"/"} className="link-header nav-links" onClick={closeMenu}>Accessori</Link>
                        <Link to={"/"} className="link-header nav-links" onClick={closeMenu}>Download</Link>
                        <Link to={"/company"} className="link-header nav-links" onClick={closeMenu}>Azienda</Link>
                        <Link to={"/contacts"} className="link-header nav-links" onClick={closeMenu}>Contatti</Link>
                    </div>

                    {/* Overlay */}
                    {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;