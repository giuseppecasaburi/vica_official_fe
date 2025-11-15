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

    const [imageIndex, setImageIndex] = useState({ current: 0, next: 1 });
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
        "/hero4.jpg"
    ];

    const textHero = [
        "Da oltre 50 anni progettiamo bagni che durano nel tempo, come le storie di chi li vive.",
        "Una storia che si rinnova a ogni progetto, da oltre mezzo secolo dedicata a valorizzare il tuo spazio.",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                // Aggiorna gli indici mentre il layer next è visibile
                setImageIndex(prev => ({
                    current: prev.next,
                    next: (prev.next + 1) % images.length
                }));

                // Poi nascondi il layer next (resetta a opacity 0)
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 0);
            }, 500);

        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="hero-img">
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${images[imageIndex.current]})` }}
                ></div>
                <div
                    className={`hero-background hero-background-next ${isTransitioning ? 'fade-in' : ''}`}
                    style={{ backgroundImage: `url(${images[imageIndex.next]})` }}
                ></div>
                <div id="overlay">
                    <section id="hero-section">
                        <div className="hero-container">
                            <div className="text-area">
                                {homePage ? (
                                    <h2 className="animate-title">
                                        Da oltre 50 anni progettiamo bagni che durano nel tempo, come le storie di chi li vive.
                                    </h2>
                                ) : companyPage ? (
                                    <h2 className="animate-title">
                                        Una storia che si rinnova a ogni progetto<span>, da oltre mezzo secolo dedicata a valorizzare il tuo spazio</span>.
                                    </h2>
                                ) : null}
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