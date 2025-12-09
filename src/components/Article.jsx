import { useEffect, useState } from "react";

function Article() {
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
                            <h2>Boston 99</h2>
                            <div className="retta"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ea veritatis minus! Consequatur delectus minima alias possimus tempora amet assumenda at quaerat fugiat ratione est, necessitatibus labore vel modi rem. fugiat ratione est, necessitatibus labore vel modi rem.</p>
                        </div>
                        <div id="color-article">
                            <h4>Colori Disponibili</h4>
                            <div className="retta"></div>
                            <div className="colore">
                                <div className="cerchio">
                                    <img src="./azzurro_rodi.jpg" alt="" />
                                </div>
                                <p>Bianco Antico</p>
                            </div>
                        </div>
                    </div>
                    <div id="image-article">
                        <div className="main-image" onClick={() => setIsModalOpen(true)}>
                            <img src={mainImage} alt="Immagine principale" />
                        </div>
                        <div className="secondary-image">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={img} alt={`Anteprima ${index + 1}`} />
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