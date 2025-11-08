import { useState } from "react";
import IsMobile from "./IsMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // ✅ Pacchetto giusto

function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobile = IsMobile(768);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>

                <div className={`menu ${isMobile ? 'd-none' : ''}`}>
                    <a href="" className="link-header nav-links">Catalogo</a>
                    <a href="" className="link-header nav-links">Accessori</a>
                    <img src="./logo.png" alt="" id="logo-official" />
                    <a href="" className="link-header nav-links">Azienda</a>
                    <a href="" className="link-header nav-links">Contatti</a>
                </div>

                {/* RESPONSIVE */}
                <div className={`menu-responsive ${isMobile ? '' : 'd-none'} ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="menu-responsive-header">
                        <img src="./logo.png" alt="" id="logo-official" />
                        <button
                            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                        <a href="" className="link-header" onClick={toggleMenu}>Catalogo</a>
                        <a href="" className="link-header" onClick={toggleMenu}>Accessori</a>
                        <a href="" className="link-header" onClick={toggleMenu}>Azienda</a>
                        <a href="" className="link-header" onClick={toggleMenu}>Contatti</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavigationBar;