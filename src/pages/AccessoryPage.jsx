import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Article from "../components/Article";
import AccessoriCorrelati from "../components/AccessoriCorrelati";
import ArticoliCorrelati from "../components/ArticoliCorrelati";
import InfoProduct from "../components/InfoProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Description from "../components/Description";

const productUrl = import.meta.env.VITE_URL_ACCESSORIO;

function AccessoryPage() {
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

    if (loading) return (
        <>
            <Header />
            <Loader />
        </>
    );
    if (error) return <p>{error}</p>;
    if (!product || !product.accessorio) return <p>Prodotto non trovato</p>;

    const accessorio = product.accessorio;
    const correlati_accessorio = product.correlati_accessorio;
    const correlati_articolo = product.correlati_articolo;

    console.log(product);


    return (
        <>
            <main>
                <Header />
                <Article titolo={accessorio.nome_linea} anteprima="" colori="" descrizione={accessorio.descrizione_linea_it} id_catalogo={accessorio.id_linea} immagini={product.immagini_articolo} />
                <Description titolo={accessorio.nome_linea} descrizione_it={accessorio.descrizione_linea_it} descrizione_en={accessorio.descrizione_linea_en} />
                {/* PASSARE I CORRELATI ACCESSORII*/}
                <AccessoriCorrelati titolo={accessorio.nome_accessorio} correlati={correlati_accessorio} />
                <ArticoliCorrelati correlati={correlati_articolo} />
            </main>
        </>
    )
}

export default AccessoryPage;