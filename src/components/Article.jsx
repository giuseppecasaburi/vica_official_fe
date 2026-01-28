import { useEffect, useState } from "react";

function Article({ titolo, anteprima, id_catalogo, descrizione, colori, immagini }) {
    const images = [
        './hero4.jpg',
        './hero2.jpg',
        './hero1.jpg',
        './hero3.jpg'
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <section id="article">
                <div id="container-article">
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
                                {colori.map((colore, index) => (
                                    <div className="colore" key={index}>
                                        <div className="cerchio">
                                            <img src={colore.link_img} alt={colore.img_alt_it} />
                                        </div>
                                        <p>{colore.nome_colore_it}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id="image-article">
                        <div className="main-image" onClick={() => setIsModalOpen(true)}>
                            <img src={mainImage} alt="Immagine principale" />
                        </div>
                        <div className="secondary-image">
                            {immagini.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={img.immagine_link} alt={`Anteprima ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

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
                </div>
            </section>
        </>
    )
}

export default Article;