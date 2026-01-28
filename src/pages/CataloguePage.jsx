import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import BestSeller from "../components/BestSeller";
import Description from "../components/Description";
import Download from "../components/Download";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import { useEffect, useState } from "react";
import axios from "axios";

const cataloguesUrl = import.meta.env.VITE_URL_CATALOGHI;

function CataloguePage() {
    const { id } = useParams();

    const [catalogues, setCatalogues] = useState([]);
    const [catalogue, setCatalogue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCatalogue = async () => {
            try {
                const resp = await axios.get(`${cataloguesUrl}/${id}`);
                setCatalogue(resp.data);
            } catch (err) {
                console.error(err);
                setError('Errore nel caricamento del catalogo');
            } finally {
                setLoading(false);
            }
        };
        
        getCatalogue();
    }, [id]);

    console.log(catalogue);
    return (
        <>
            <main>
                <Header />
                {loading ? (
                    <Loader />
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <>
                        <BestSeller BestSeller={catalogue.articoli_preferiti} />
                        <Description titolo={catalogue.nome_catalogo} descrizione_it={catalogue.descrizione_catalogo_it} descrizione_en={catalogue.descrizione_catalogo_en} />
                        <ProductsList articoli={catalogue.articoli_collegati} />
                        {/* <Download cataloghi={catalogues.cataloghi} /> */}
                    </>
                )}
            </main>
        </>
    )
}

export default CataloguePage;