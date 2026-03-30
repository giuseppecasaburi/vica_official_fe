import BestSellerCard from "./BestSellerCard";

function BestSeller({ BestSeller, Accessorio = "" }) {
    return (
        <>
            <section id="best-seller">
                <div id="best-seller-container">
                    <h2>Best Seller</h2>
                    <div className="product-bs">
                        {Accessorio === "true" ? (
                            BestSeller.map((item, index) => (
                                <BestSellerCard key={index} titolo={item.nome} img={item.link} img_alt_it={item.alt_it} img_alt_en={item.alt_en} art_id={item.id} Accessorio="true" />

                            ))
                        ) : (
                            BestSeller.map((articolo, index) => (
                                <BestSellerCard key={index} titolo={articolo.nome} img={articolo.link} img_alt_it={articolo.alt_it} img_alt_en={articolo.alt_en} art_id={articolo.id} />

                            ))
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller;