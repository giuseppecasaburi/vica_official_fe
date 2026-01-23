function FormContact() {
    return (
        <>
            <section id="area-form">
                <div id="tag-contact">
                    <h2>Il nostro team è qui per ascoltarti e offrirti tutto il supporto di cui hai bisogno.</h2>

                    {/* Desktop layout - 2 righe */}
                    <div className="ballon-row">
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                    </div>
                    

                    {/* Mobile layout - slider unico */}
                    <div className="ballon-slider">
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                        
                    </div>
                </div>
                <div id="form-contact">
                    <div id="form-container">
                        <h2>Contattaci <span id="form-span">in un click!</span></h2>
                        <form action="">
                            <div className="form-input">
                                <input type="text" placeholder="Nome" className="fild-input" />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder="Cellulare" className="fild-input" />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder="Oggetto" className="fild-input" />
                            </div>
                            <div className="form-input">
                                <textarea type="text" placeholder="Descrizione" className="fild-input text-area" />
                            </div>
                            <button type="submit" className="button-form">Invia Email</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContact;