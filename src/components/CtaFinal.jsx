import { Link } from "react-router-dom";
import TextTyping from "./TextTyping";

function CtaFinal() {
    return (
        <>
            <section id="cta-final">
                <div id="logo-area">
                    {/* <div className="container-img">
                        <img src="./Documento224.png" alt="" id="logo-official" />
                    </div> */}
                    <TextTyping />
                </div>
                <div id="cta-area">
                    <img src="./cta_catalogo.jpg" alt="" />
                    <div className="rettangolo"></div>
                    <Link to={"/catalogues"} className="button-link">Scopri di più</Link>
                </div>
            </section>
        </>
    )
}

export default CtaFinal;