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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo doloribus quae labore cupiditate temporibus, quibusdam vitae tenetur hic aliquam placeat voluptatem eos id aspernatur quis iusto sequi reiciendis molestias?</p>
                            <Link to={"#area-form"} className="button-form">Contattaci</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoveCiTroviamo;