import { Link } from "react-router-dom";
import BestSellerCard from "./BestSellerCard";

function AccessoriCorrelati({ titolo, correlati }) {
    return (
        <>
            <section id="accessori-correlati">
                <h2>Accessori Correlati</h2>
                <div className="retta"></div>
                <p>Decora il tuo spazio con gli accessori perfetti da abbinare a {titolo}</p>
                <div className="product-bs">
                    {correlati.map((correlato, index) => (
                        <BestSellerCard key={index} titolo={correlato.nome_articolo} img={correlato.img_link} img_alt_it={correlato.img_alt_it} img_alt_en={correlato.img_alt_it} art_id={correlato.articolo_id}/>
                    ))}
                </div>
                <Link className="button-link">Scopri di più</Link>
            </section>
        </>
    )
}

export default AccessoriCorrelati;