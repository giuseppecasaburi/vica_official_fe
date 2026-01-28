import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Download({ cataloghi }) {
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
                                <Link to={"/"} className="button-link"><FontAwesomeIcon icon={faDownload} /> Scarica</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Download;