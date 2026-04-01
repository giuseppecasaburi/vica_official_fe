import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Download({ cataloghi }) {
    const cataloghi_download = {
        "Catalogo Essential": "/essential/catalogo_essential.pdf",
        "Catalogo Cannettato": "/cannettato/catalogo_cannettato.pdf",
        "Catalogo Wood": "/wood/catalogo_wood.pdf",
    }

    return (
        <>
            <section id="download-area">
                <div className="download-header">
                    <h2>Download</h2>
                    <p>Scarica i nostri cataloghi!</p>
                </div>
                <div className="download-container">
                    {cataloghi.map((catalogo, index) => (
                        <div className="single-download" key={`${index}_download`}>
                            <div className="image">
                                <img src={catalogo.img_link} alt={catalogo.img_alt_it} />
                            </div>
                            <div className="text">
                                <h3>{catalogo.nome_catalogo}</h3>
                                <div className="retta"></div>
                                <p>{catalogo.anteprima_catalogo_it}</p>
                                <a href={cataloghi_download[catalogo.nome_catalogo]} download className="button-link">
                                    <FontAwesomeIcon icon={faDownload} /> Scarica
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Download;