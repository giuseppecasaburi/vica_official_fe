import BestSellerCard from "./BestSellerCard";

function BestSeller({ BestSeller }) {
    return (
        <>
            <section id="best-seller">
                <div id="best-seller-container">
                    <h2>Best Seller</h2>
                    <div className="product-bs">
                        {BestSeller.map((articolo, index) => (
                            <BestSellerCard key={index} titolo={articolo.nome} img={articolo.link} img_alt_it={articolo.alt_it} img_alt_en={articolo.alt_en} art_id={articolo.id}/>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller;