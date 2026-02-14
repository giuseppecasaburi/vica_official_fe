import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ArticoliCorrelati({ correlati }) {
    
    return (
        <>
            <section id="articoli-correlati">
                <h2>Articoli Correlati</h2>
                <div className="retta"></div>
                <div className="product-bs">
                    {correlati.map((articolo, index) => (
                        <ProductCard img={articolo.img_link} img_alt_en={articolo.img_alt_en} img_alt_it={articolo.img_alt_en} tipo={""} titolo={articolo.nome_articolo} key={index} art_id={articolo.articolo_id}/>
                    ))}
                </div>
                <Link className="button-link">Scopri di più</Link>
            </section>
        </>
    )
}

export default ArticoliCorrelati;