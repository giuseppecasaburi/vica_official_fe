import Header from "../components/Header";

function ContactPage() {
    return (
        <>
            <main id="contatti">
                <Header />
                <section id="area-form">
                    <div id="tag-contact">
                        <h2>Il nostro team è qui per ascoltarti e offrirti tutto il supporto di cui hai bisogno.</h2>
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
                                    <textarea type="text" placeholder="Descrizione" className="fild-input" />
                                </div>
                                <button type="submit" className="button-form">Invia Email</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactPage;