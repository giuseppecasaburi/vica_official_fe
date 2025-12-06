import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductsList() {
    return (
        <>
            <section id="products-list">
                <div id="products-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <Link className="button-link">Carica Altri</Link>
                </div>
            </section>
        </>
    )
}

export default ProductsList;