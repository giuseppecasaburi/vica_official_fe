import { useLocation } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
    const location = useLocation();
    const homePage = location.pathname === "/";
    const companyPage = location.pathname === "/company";
    const contactPage = location.pathname === "/contacts";
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
                    <NavigationBar />
                    <section id="hero-section">
                        <div className="hero-container">
                        </div>
                    </section>
                </div >
                {companyPage ? <HeroSlider /> : (<p className="btn-scopri scroll-button">
                    Scopri di più <br />
                    <FontAwesomeIcon icon={faArrowDown} />
                </p>)}

            </div >
        </>
    )
}

export default HeroSection;