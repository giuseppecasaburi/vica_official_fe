import { Link } from "react-router-dom";
import Map from "./Map";

function DoveCiTroviamo() {
    return (
        <>
            <section id="dove-ci-troviamo">
                <div id="container-dct">
                    <img src="./hero4.jpg" alt="" />
                    <div className="content-wrapper">
                        <div className="content-left">
                            <h2 className="responsive-dct">Vieni a trovarci<br />nel nostro showroom</h2>
                            <div className="retta responsive-dct"></div>
                            <Map/>
                        </div>
                        <div className="content-right">
                            <h2 className="desktop-dct">Vieni a trovarci<br />nel nostro showroom</h2>
                            <div className="retta desktop-dct"></div>
                            <p>Siamo presenti sul territorio per offrirti un'assistenza diretta e personalizzata. Vieni a trovarci nella nostra sede oppure contattaci: il nostro team è a tua disposizione per ascoltare ogni esigenza e guidarti verso la soluzione più adatta.</p>
                            <Link to={"#area-form"} className="button-form">Contattaci</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoveCiTroviamo;