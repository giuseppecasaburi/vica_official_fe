import BestSellerCard from "./BestSellerCard";

function BestSeller() {
    return (
        <>
            <section id="best-seller">
                <div id="best-seller-container">
                    <h2>Best Seller</h2>
                    <div className="product-bs">
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller;