import Counter from "./Counter";

function Presentation() {
    const items = [
        { target: 50, text: "Anni nel settore" },
        { target: 100, text: "Articoli selezionati" },
        { target: 100, simbol: "%", text: "Made in Italy" }
    ];

    return (
        <>
            <section id="company-presentation">
                <div id="container-presentation">
                    <div id="image-presentation">
                        {/* <div className="retta"></div>
                        <div className="retta"></div> */}
                        <img src="./family.jpg" alt="" />
                    </div>
                    <div id="content-text-area">
                        <div id="titolo">
                            <h2>Le Nostre Radici</h2>
                        </div>
                        <div id="image-presentation-responsive">
                            <img src="./family.jpg" alt="" />
                        </div>
                        <div id="testo">
                            <div className="retta"></div>
                            <p>Nata oltre cinquant’anni fa, l’azienda ha costruito la propria identità sull’esperienza artigianale e sulla cura dei dettagli.
                                La sua crescita è frutto di un impegno costante e della passione dei fondatori, sempre guidati da un forte senso di qualità.
                                Negli anni, la dedizione del team ha permesso di consolidare una presenza stabile nel mondo dell’arredo bagno.
                                Una storia fatta di competenza, continuità e solide radici italiane.</p>
                            <div className="retta"></div>
                            <p>L’evoluzione dell’azienda è passata attraverso una selezione rigorosa dei materiali e un design sempre più ricercato.
                                La gamma dei prodotti si è ampliata per rispondere alle esigenze di ambienti diversi, mantenendo coerenza estetica e funzionale.
                                Ogni collezione riflette il dialogo continuo tra tecnica, stile e affidabilità.
                                Un equilibrio che ha contribuito a definire un’immagine distintiva e riconoscibile.</p>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="identity">
                <div id="container-identity">
                    <div id="content-text-area">
                        <div id="titolo">
                            <h2>Il Nostro Sguardo al Futuro</h2>
                        </div>
                        <div id="testo">
                            <div className="retta"></div>
                            <p>Negli ultimi anni l’azienda ha intrapreso un percorso di rinnovamento, abbracciando un linguaggio più contemporaneo e minimale.
                                Innovazione, ricerca e attenzione al design guidano oggi lo sviluppo di soluzioni attente alle tendenze moderne.
                                L’obiettivo è creare prodotti che uniscano estetica, durata e comfort in modo armonioso.
                                Una visione chiara che proietta il brand verso il futuro, senza perdere la propria identità.</p>
                        </div>
                    </div>
                    <div id="company-number">
                        <div id="conteiner-company-number">
                            <div className="col">
                                <div className="text-col">
                                    <p>100%</p>
                                    <span>Made <br />in Italy</span>
                                </div>
                                <div className="text-col">
                                    <p>100+</p>
                                    <span>Articoli selezionati</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-col">
                                    <p>100%</p>
                                    <span>Clienti soddisfatti</span>
                                </div>
                                <div className="text-col">
                                    <p>50+</p>
                                    <span>Anni nel settore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="company-banner">
                <div id="conteiner-company-banner">
                    <div id="overlay">
                    </div>
                    <div id="company-banner-content">
                        <h2>Affidati a dei professionisti</h2>
                        <p>Contattaci per una consulenza gratuita</p>
                        <a className="button-link">Contatti</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Presentation;