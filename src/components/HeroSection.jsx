import { useLocation } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import { useEffect, useState } from "react";

function HeroSection() {
    const location = useLocation();
    const homePage = location.pathname === "/";
    const companyPage = location.pathname === "/company";
    const contactPage = location.pathname === "/";
    const cataloguesPage = location.pathname === "/";
    const cataloguePage = location.pathname === "/";

    const [currentImage, setCurrentImage] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const images = [
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
        "/hero4.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true);

            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFadeOut(false);
            }, 500); // Durata dell'effetto di spegnimento

            setTimeout(() => {
                setFadeOut(false);
            }, 510); // Inizia il fade-in quasi immediatamente

        }, 5000); // Cambia immagine ogni 5 secondi

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="hero-img">
                <div style={{ backgroundImage: `url(${images[currentImage]})` }} className={`hero-background ${fadeOut ? 'fade-out' : 'fade-in'}`}></div>
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