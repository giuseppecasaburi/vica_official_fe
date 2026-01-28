import { Link } from "react-router-dom";

function Catalogue({ id, index, layout, titolo, anteprima, anteprima_en, img, img_alt_it, img_alt_en }) {
    let isOdd = layout === "odd" ? "order-1" : "";
    return (
        <>
            <section id="catalogue-area">
                <div id="container-catalogue">
                    <div className="catalogue">
                        <div className={`image-catalogue ${isOdd}`}>
                            <img src={img} alt="img_alt_it" />
                        </div>
                        <div className="text-catalogue">
                            <h2>{titolo}</h2>
                            <div className="retta"></div>
                            <p>{anteprima}</p>
                            <Link to={`/catalogue/${id}` } className="button-link">Scopri di più</Link>
                        </div>
                    </div>
                </div>
                <div id="container-catalogue-responsive">
                    <div className="catalogue">
                        <div className="text-catalogue">
                            <h2>{titolo}</h2>
                            <div className={`image-catalogue ${isOdd}`}>
                                <img src="./anteprima_catalogo.jpg" alt="" />
                            </div>
                            <p>{anteprima}</p>
                            <Link to={`/catalogue/${id}` } className="button-link">Scopri di più</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalogue;