import { useLocation } from "react-router-dom";
import HeroSlider from "./HeroSlider";

function HeroSection() {
    const location = useLocation();
    const homePage = location.pathname === "/";
    const companyPage = location.pathname === "/company";
    const contactPage = location.pathname === "/";
    const cataloguesPage = location.pathname === "/";
    const cataloguePage = location.pathname === "/";

    return (
        <>
            <div id="hero-img">
                <div id="overlay">
                    <section id="hero-section">
                        <div className="hero-container">
                            <div className="text-area">
                                <h2 className="animate-title">Da oltre 50 anni progettiamo bagni che durano nel tempo, come le storie di chi li vive.</h2>
                            </div>
                            {homePage ? (
                                <div div className="button-area animate-text">
                                    <a href="" className="button-link">Cataloghi</a>
                                    <a href="" className="button-link">Contattaci</a>
                                </div>
                            ) :
                                ""
                            }
                        </div>
                    </section>
                </div >
                {companyPage ? <HeroSlider /> : ""}
            </div >
        </>
    )
}

export default HeroSection;