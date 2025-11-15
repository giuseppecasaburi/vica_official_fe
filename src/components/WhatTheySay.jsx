function WhatTheySay() {
    return (
        <>
            <section id="what-they-say">
                <h2>Cosa Dicono Di Noi</h2>
                <div className="box-wts">
                    <div className="recensione">
                        <div className="header-rec">
                            <div className="cerchio-wts">
                                <img src="./user.png" alt="" />
                            </div>
                            <h3>Martina R.</h3>
                        </div>
                        <p>Ho acquistato alcuni complementi per il bagno e sono rimasta colpita dalla qualità dei materiali. Le finiture sono davvero curate e si vede che c’è attenzione anche nei piccoli dettagli.</p>
                    </div>
                    <div className="recensione">
                        <div className="header-rec">
                            <div className="cerchio-wts">
                                <img src="./user.png" alt="" />
                            </div>
                            <h3>Lorenzo P.</h3>
                        </div>
                        <p>Servizio impeccabile e prodotti solidi. Il mobile che ho scelto è arrivato perfettamente imballato e rispecchia esattamente ciò che avevo visto in catalogo. Molto soddisfatto.</p>
                    </div>
                    <div className="recensione">
                        <div className="header-rec">
                            <div className="cerchio-wts">
                                <img src="./user.png" alt="" />
                            </div>
                            <h3>Elisa M.</h3>
                        </div>
                        <p>Design moderno e linee pulite, proprio quello che cercavo per rinnovare il mio bagno. Anche l’assistenza pre-acquisto è stata gentile e chiara nel consigliarmi la soluzione giusta.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatTheySay;