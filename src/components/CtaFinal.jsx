import TextTyping from "./TextTyping";

function CtaFinal() {
    return (
        <>
            <section id="cta-final">
                <div id="logo-area">
                    <div className="container-img">
                        <img src="./Documento2.webp" alt="" id="logo-official" />
                    </div>
                    <TextTyping />
                </div>
                <div id="cta-area">
                    <img src="./cta_catalogo.jpg" alt="" />
                    <div className="rettangolo"></div>
                    <a href="" className="button-link">Scopri di più</a>
                </div>
            </section>
        </>
    )
}

export default CtaFinal;