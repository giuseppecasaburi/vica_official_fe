function AboutUs() {
    return (
        <>
            <section id="about-us">
                <div id="container-about-us">
                    <div id="image-area">
                        <h2>Da Oltre</h2>

                        {/* VERSIONE FIGMA */}
                        {/* <span className="numero">50 <span className="anni">Anni</span></span> */}

                        {/* PRIMA VARIANTE, ATTIVARE SOLO IL SEGUENTE SPAN */}
                        <span className="numero pulse">50 Anni</span>
                        <div className="cerchio">
                            <img src="./test.webp" alt="" />
                        </div>
                        <span className="anni numero">Leader</span>
                        <h2>Nel Settore</h2>
                    </div>
                    <div id="content-text-area">
                        <div id="titolo">
                            <h2>La Nostra Storia</h2>
                        </div>
                        <div id="testo">
                            <div className="retta"></div>
                            <p>Da oltre cinquant’anni l’azienda interpreta l’arredo bagno con un’eleganza essenziale e senza tempo.
                                La continua ricerca della qualità guida ogni scelta, dai materiali alle finiture.
                                Un percorso fatto di stile, esperienza e una visione premium del vivere quotidiano.</p>
                            <div className="retta"></div>
                            <p>Materiali selezionati e design contemporaneo si uniscono per creare prodotti destinati a durare.
                                Linee pulite e proporzioni equilibrate definiscono un’estetica raffinata e versatile.
                                Ogni proposta nasce per trasformare lo spazio in un ambiente armonioso e distintivo.</p>
                            <div className="retta"></div>
                        </div>
                        <div id="bottone">
                            <a href="" className="button-link">Scopri di più</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;