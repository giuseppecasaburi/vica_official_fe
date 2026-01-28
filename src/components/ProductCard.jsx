function ProductCard({titolo, img, img_alt_it, img_alt_en, tipo}) {
    return (
        <>
            <div className="product-element">
                <div className="product-card">
                    <img src={img} alt={img_alt_it} />
                </div>
                <p>{tipo}</p>
                <h4>{titolo}</h4>
            </div>
        </>
    )
}

export default ProductCard;