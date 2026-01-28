import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Article from "../components/Article";
import AccessoriCorrelati from "../components/AccessoriCorrelati";
import ArticoliCorrelati from "../components/ArticoliCorrelati";
import InfoProduct from "../components/InfoProduct";
import { useEffect, useState } from "react";
import axios from "axios";

const productUrl = import.meta.env.VITE_URL_PRODUCT;

function ProductPage() {
    const { id } = useParams();
    // RIPREDERE DAL RECUPERO DELL'ID DALL'URL E DALLE VARIE CHIAMATE
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getProduct = async () => {
            try {
                const resp = await axios.get(`${productUrl}/${id}`);
                setProduct(resp.data);
                console.log(resp.data);
            } catch (err) {
                console.error(err);
                setError('Errore nel caricamento del prodotto');
            } finally {
                setLoading(false);
            }
        };

        getProduct();

    }, [id]);

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p>{error}</p>;
    if (!product || !product.articolo) return <p>Prodotto non trovato</p>;

    const articolo = product.articolo;
    const correlati_articolo = product.correlati_articolo;

    console.log(product);
    

    return (
        <>
            <main>
                <Header />

                <Article titolo={articolo.nome_articolo} anteprima={articolo.articolo_anteprima_it} colori={product.colori_articolo} descrizione={articolo.articolo_descrizione_it} id_catalogo={articolo.articolo_catalogo_id} immagini={product.immagini_articolo} />
                <InfoProduct />
                {/* PASSARE I CORRELATI ACCESSORII*/}
                <AccessoriCorrelati titolo={articolo.nome_articolo} correlati={correlati_articolo}/>
                <ArticoliCorrelati correlati={correlati_articolo} />
            </main>
        </>
    )
}

export default ProductPage;