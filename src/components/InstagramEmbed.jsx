import { useEffect, useRef, useState } from "react";

function InstagramEmbed({ url }) {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Aggiungi lo script embed solo se non esiste
        if (!document.getElementById("instagram-embed-script")) {
            const script = document.createElement("script");
            script.id = "instagram-embed-script";
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Osserva quando compare l'iframe
        const observer = new MutationObserver(() => {
            const iframe = containerRef.current?.querySelector("iframe");
            if (iframe) {
                setIsLoaded(true);
                observer.disconnect();
            }
        });

        observer.observe(containerRef.current, { childList: true, subtree: true });

        // Ricarica embed Instagram
        if (window.instgrm) {
            setIsLoaded(false); // reset quando cambia URL
            window.instgrm.Embeds.process();
        }

        return () => observer.disconnect();
    }, [url]);

    return (
        <div style={{ position: "relative", minHeight: "300px" }} ref={containerRef}>
            {!isLoaded && (
                <div className="loader">
                    {/* Loader personalizzabile */}
                    <div className="spinner"></div>
                </div>
            )}

            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
            ></blockquote>
        </div>
    );
}



// AGGIUNGERE QUESTO DOVE VUOI IMPLEMENTARE
{/* <div className="ig">
    <InstagramEmbed url="https://www.instagram.com/p/DHn2zMGC26_/" />
</div> */}


export default InstagramEmbed;