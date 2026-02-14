import { NavLink } from "react-router-dom";

function ProductCard({ titolo, img, img_alt_it, img_alt_en, art_id,tipo}) {
    return (
        <>
            <div className="product-element">
                <NavLink to={`/product/${art_id}`} style={ {textDecoration: "none"} }>
                    <div className="product-card">
                        <img src={img} alt={img_alt_it} />
                    </div>
                    <p>{tipo}</p>
                    <h4>{titolo}</h4>
                </NavLink>
            </div>
        </>
    )
}

export default ProductCard;