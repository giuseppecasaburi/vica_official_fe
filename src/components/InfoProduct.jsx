function InfoProduct({ varianti }) {
    return (
        <>
            <section id="info-product">
                <h2>Informazioni Articolo</h2>
                <div className="retta"></div>
                <div className="info-area">
                    <div id="image-block">
                        <img src="/Dallas90_misure.jpg" alt="" />
                    </div>
                    <div id="text-block">
                        {varianti.map((variante, index) => (
                            <div className="info-box" key={index}>
                                <h4>{variante.nome_variante}</h4>
                                <span>Larghezza: {variante.larghezza}{!variante.larghezza?.includes('Ø') ? ' cm' : ''}</span>
                                <span>Altezza: {variante.altezza}{!variante.altezza?.includes('Ø') ? ' cm' : ''}</span>
                                <span>Profondità: {variante.profondita}{!variante.profondita?.includes('Ø') ? ' cm' : ''}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoProduct;