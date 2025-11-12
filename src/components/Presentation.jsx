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
                            <h2>La nostra storia ha radici molto profonde</h2>
                        </div>
                        <div id="image-presentation-responsive">
                            <img src="./family.jpg" alt="" />
                        </div>
                        <div id="testo">
                            <div className="retta"></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!</p>
                            <div className="retta"></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!</p>
                            <div className="retta"></div>
                        </div>
                        <div id="bottone">
                            <a href="" className="button-link">Scopri di più</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="identity">
                <div id="container-identity">
                    <div id="content-text-area">
                        <div id="titolo">
                            <h2>La nostra storia ha radici molto profonde</h2>
                        </div>
                        <div id="testo">
                            <div className="retta"></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ea architecto unde labore soluta vero, itaque ab ducimus quia cupiditate veniam quisquam quasi repudiandae mollitia nihil consequatur aut blanditiis illum!</p>
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