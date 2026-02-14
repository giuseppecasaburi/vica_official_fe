import axios from "axios";
import Catalogue from "../components/Catalogue";
import Download from "../components/Download";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

const cataloguesUrl = import.meta.env.VITE_URL_CATALOGHI;

function CataloguesPage() {
    const [catalogues, setCatalogues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCatalogues = async () => {
            try {
                const resp = await axios.get(cataloguesUrl);
                setCatalogues(resp.data);
            } catch (err) {
                console.error(err);
                setError('Errore nel caricamento dei cataloghi');
            } finally {
                setLoading(false);
            }
        };

        getCatalogues();
    }, []);

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
                        {catalogues.cataloghi.map((catalogo, index) => (
                            <Catalogue
                                id={catalogo.id_catalogo}
                                key={index}
                                layout={index % 2 == 0 ? 'odd' : ''}
                                titolo={catalogo.nome_catalogo}
                                anteprima={catalogo.anteprima_catalogo_it}
                                anteprima_en={catalogo.anteprima_catalogo_en}
                                img={catalogo.img_link}
                                img_alt_it={catalogo.img_alt_it}
                                img_alt_en={catalogo.img_alt_en}
                            />
                        ))}
                        <Download cataloghi={catalogues.cataloghi} />
                    </>
                )}
            </main>
        </>
    )
}

export default CataloguesPage;