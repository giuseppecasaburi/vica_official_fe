import ProductCard from "./ProductCard";

function CollectionsList({ collezioni }) {
    return (
        <>
            <section id="products-list">
                <div className="download-header mb-5">
                    <h2>Esplora le collezioni Essential</h2>
                </div>
                <div id="products-container">
                    {collezioni.map((collezione, index) => (
                        <ProductCard key={index} titolo={collezione.nome_catalogo} img={collezione.img_link} img_alt_it={collezione.img_alt_it} img_alt_en={collezione.img_alt_it} art_id={collezione.id_catalogo} tipo={"Collezione"} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default CollectionsList;