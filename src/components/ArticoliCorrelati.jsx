import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ArticoliCorrelati() {
    return (
        <>
            <section id="articoli-correlati">
                <h2>Articoli Correlati</h2>
                <div className="product-bs">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <Link className="button-link">Scopri di più</Link>
            </section>
        </>
    )
}

export default ArticoliCorrelati;