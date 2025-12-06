import { Link } from "react-router-dom";
import BestSellerCard from "./BestSellerCard";

function AccessoriCorrelati() {
    return (
        <>
            <section id="accessori-correlati">
                <h2>Accessori Correlati</h2>
                <div className="retta"></div>
                <p>Decora il tuo spazio con gli accessori perfetti da abbinare a Boston 99</p>
                <div className="product-bs">
                    <BestSellerCard />
                    <BestSellerCard />
                    <BestSellerCard />
                    <BestSellerCard />
                </div>
                <Link className="button-link">Scopri di più</Link>
            </section>
        </>
    )
}

export default AccessoriCorrelati;