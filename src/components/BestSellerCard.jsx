function BestSellerCard({titolo, img, img_alt_it, img_alt_en, art_id}) {
    return (
        <>
            <div className="bs-card">
                <h4>{titolo}</h4>
                <img src={img} alt={img_alt_it} />
            </div>
        </>
    )
}

export default BestSellerCard;