import { useEffect, useState } from "react";

function Article({ titolo, anteprima, id_catalogo, descrizione, colori, immagini }) {

    const [mainImage, setMainImage] = useState(immagini[0].immagine_link);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isColorModalOpen, setIsColorModalOpen] = useState(false);

    let visibili = [];
    let nascosti = [];


    if (colori != "") {
        const coloriKeys = Object.keys(colori);
        const laccatiKey = coloriKeys.find(k => k.toLowerCase() === 'laccati');
        const primaryKey = laccatiKey ?? coloriKeys[0];
        const laccati = (primaryKey !== undefined ? colori[primaryKey] : []) || [];

        const MAX_VISIBLE = 10;
        const hasTooMany = laccati.length >= MAX_VISIBLE;
        visibili = hasTooMany ? laccati.slice(0, MAX_VISIBLE - 1) : laccati;
        nascosti = hasTooMany ? laccati.slice(MAX_VISIBLE - 1) : [];
    }

    useEffect(() => {
        if (isModalOpen || isColorModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen, isColorModalOpen]);

    return (
        <>
            <section id="article">
                <div id="container-article">

                    {colori != "" ? (
                        <>
                            <div id="description-article">

                                <div id="text-article">
                                    <h2>{titolo}</h2>
                                    <div className="retta"></div>
                                    <p>{descrizione}</p>
                                </div>
                                <div id="color-article">
                                    <h4>Colori Disponibili</h4>
                                    <div className="retta"></div>
                                    <div className="colors-grid">
                                        {visibili.map((colore, index) => (
                                            <div className="colore" key={index}>
                                                <div className="cerchio">
                                                    <img src={colore.link_img} alt={colore.img_alt_it} />
                                                </div>
                                                <p>{colore.nome_colore_it}</p>
                                            </div>
                                        ))}

                                        {nascosti.length > 0 && (
                                            <div className="colore" onClick={() => setIsColorModalOpen(true)}>
                                                <div className="cerchio cerchio-more">
                                                    <span>+</span>
                                                </div>
                                                <p>Altri colori</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </>
                    ) : (
                        ""
                    )}


                    {colori != "" ? (
                        <div id="image-article">
                            <div className="main-image" onClick={() => setIsModalOpen(true)}>
                                <img src={mainImage} alt="Immagine principale" />
                            </div>
                            <div className="secondary-image">
                                {immagini.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail ${mainImage === img.immagine_link ? 'active' : ''}`}
                                        onClick={() => setMainImage(img.immagine_link)}
                                    >
                                        <img src={img.immagine_link} alt={`Anteprima ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (


                        <div id="image-article-v2">
                            <div className="main-image-v2" onClick={() => setIsModalOpen(true)}>
                                <img src={mainImage} alt="Immagine principale" />
                            </div>
                            <div className="secondary-image-v2">
                                {immagini.slice(0, 25).map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail-v2 ${mainImage === img.immagine_link ? 'active' : ''}`}
                                        onClick={() => setMainImage(img.immagine_link)}
                                    >
                                        <img src={img.immagine_link} alt={`Anteprima ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    )}




                    {isModalOpen && (
                        <div className="modal" onClick={() => setIsModalOpen(false)}>
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>
                                &times;
                            </button>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <img src={mainImage} alt="Immagine a schermo intero" />
                            </div>
                        </div>
                    )}

                    {isColorModalOpen && (
                        <div className="modal color-modal" onClick={() => setIsColorModalOpen(false)}>
                            <div className="color-modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="color-modal-close" onClick={() => setIsColorModalOpen(false)}>
                                    &times;
                                </button>
                                <h3>Colori Disponibili</h3>
                                <div className="retta"></div>
                                {Object.entries(colori).map(([tipologia, lista]) => (
                                    <div className="color-section" key={tipologia}>
                                        <h4>{tipologia.replace(/_/g, ' ') || 'Colori'}</h4>
                                        <div className="colors-grid">
                                            {lista.map((colore, index) => (
                                                <div className="colore" key={index}>
                                                    <div className="cerchio">
                                                        <img src={colore.link_img} alt={colore.img_alt_it} />
                                                    </div>
                                                    <p>{colore.nome_colore_it}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Article;