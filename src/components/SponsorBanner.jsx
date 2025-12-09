import { useState, useEffect } from 'react';

function SponsorBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Mostra il banner dopo 1 minuto (60000ms)
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            // Piccolo delay per permettere al DOM di aggiornarsi prima dell'animazione
            setTimeout(() => {
                setIsAnimating(true);
            }, 50);
        }, 30000);

        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (isVisible && isAnimating) {
            // Si nasconde dopo 20 secondi
            const hideTimer = setTimeout(() => {
                handleClose();
            }, 10000);

            return () => clearTimeout(hideTimer);
        }
    }, [isVisible, isAnimating]);

    const handleClose = () => {
        setIsAnimating(false);
        // Aspetta la fine della transizione prima di rimuovere dal DOM
        setTimeout(() => {
            setIsVisible(false);
        }, 500);
    };

    if (!isVisible) return null;

    return (
        <aside className={`sponsor-wrapper ${isAnimating ? 'show' : ''}`}>
            <div className="sponsor-container">
                <button
                    className="close-btn"
                    onClick={handleClose}
                    aria-label="Chiudi banner"
                >
                    ×
                </button>
                <div className="img-container">
                    <img src="./Documento224.png" alt="" />
                </div>
                <div className="text-container">
                    <p>10 Clienti hanno visualizzato il portale nell'ultima ora!</p>
                </div>
            </div>
        </aside>
    );
}

export default SponsorBanner;