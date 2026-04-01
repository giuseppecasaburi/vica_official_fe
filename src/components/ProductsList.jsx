import ProductCard from "./ProductCard";

function ProductsList({ articoli, tipo = "" }) {
    return (
        <>
            <section id="products-list">
                <div id="products-container">
                    {articoli.map((articolo, index) => (
                        tipo === "accessorio" ? (
                            <ProductCard key={index} titolo={articolo.nome} img={articolo.link} img_alt_it={articolo.alt_it} img_alt_en={articolo.alt_en} art_id={articolo.id} tipo={"accessorio"} />
                        ) : (
                            <ProductCard key={index} titolo={articolo.nome} img={articolo.link} img_alt_it={articolo.alt_it} img_alt_en={articolo.alt_en} art_id={articolo.id} tipo={"mobile"} />
                        )
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductsList;
