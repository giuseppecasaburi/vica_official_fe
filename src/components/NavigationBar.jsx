import { useState } from "react";
import IsMobile from "./IsMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
                    <Link to={"/"} className="link-header nav-links">Catalogo</Link>
                    <Link to={"/"} className="link-header nav-links">Accessori</Link>
                    <img src="./logo.png" alt="" id="logo-official" />
                    <Link to={"/company"} className="link-header nav-links">Azienda</Link>
                    <Link to={"/contacts"} className="link-header nav-links">Contatti</Link>
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
                        <Link to={"/"} className="link-header" onClick={toggleMenu}>Catalogo</Link>
                        <Link to={"/"} className="link-header" onClick={toggleMenu}>Accessori</Link>
                        <Link to={"/company"} className="link-header" onClick={toggleMenu}>Azienda</Link>
                        <Link to={"/contacts"} className="link-header" onClick={toggleMenu}>Contatti</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavigationBar;