import { useLocation } from "react-router-dom";
import BoxNumber from "./BoxNumber";
import NavigationBar from "./navigationBar";

function Header() {
    const location = useLocation();

    const hideHeader = location.pathname === "/";
    

    return (
        <>
            <header>
                <div className="header">
                    <div id="overlay">
                        <NavigationBar />
                        <section id="hero-section">
                            <div className="hero-container">
                                <div className="text-area">
                                    <h2 className="animate-title">Da oltre 50 anni progettiamo bagni che durano nel tempo, come le storie di chi li vive.</h2>
                                </div>
                                <div className="button-area animate-text">
                                    <a href="" className="button-link">Cataloghi</a>
                                    <a href="" className="button-link">Contattaci</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                { hideHeader ? <BoxNumber /> : "" }
            </header>
        </>
    )
}

export default Header;