import { Link } from "react-router-dom";

function Catalogue({ layout }) {
    let isOdd = layout === "odd" ? "order-1" : "";
    return (
        <>
            <section id="catalogue-area">
                <div id="container-catalogue">
                    <div className="catalogue">
                        <div className={`image-catalogue ${isOdd}`}>
                            <img src="./anteprima_catalogo.jpg" alt="" />
                        </div>
                        <div className="text-catalogue">
                            <h2>Catalogo Cannettato</h2>
                            <div className="retta"></div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolorem nam in? Eaque accusamus maxime laborum ex! Rem corporis, architecto perspiciatis repellendus deserunt ea sit saepe commodi voluptatibus, molestias accusantium.</p>
                            <Link to={"/catalogue"} className="button-link">Scopri di più</Link>
                        </div>
                    </div>
                </div>
                <div id="container-catalogue-responsive">
                    <div className="catalogue">
                        <div className="text-catalogue">
                            <h2>Catalogo Cannettato</h2>
                            <div className={`image-catalogue ${isOdd}`}>
                                <img src="./anteprima_catalogo.jpg" alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolorem nam in? Eaque accusamus maxime laborum ex! Rem corporis, architecto perspiciatis repellendus deserunt ea sit saepe commodi voluptatibus, molestias accusantium.</p>
                            <Link to={"/catalogue"} className="button-link">Scopri di più</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalogue;