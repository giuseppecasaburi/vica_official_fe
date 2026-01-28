import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductsList({ articoli }) {
    return (
        <>
            <section id="products-list">
                <div id="products-container">
                    {articoli.map((articolo, index) => (
                        <ProductCard key={index} titolo={articolo.nome} img={articolo.link} img_alt_it={articolo.alt_it} img_alt_en={articolo.alt_it} tipo={"mobile"} />
                    ))}
                    {articoli.length > 7 && (
                        <Link to="/product" className="button-link">Carica Altri</Link>
                    )}
                </div>
            </section>
        </>
    )
}

export default ProductsList;