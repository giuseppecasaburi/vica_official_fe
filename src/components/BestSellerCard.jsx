import { NavLink } from "react-router-dom";

function BestSellerCard({ titolo, img, img_alt_it, img_alt_en, art_id }) {
    return (
        <>
            <div className="bs-card">
                <NavLink to={`/product/${art_id}`} style={{ textDecoration: "none", width:"100%", height:"100%" }}>
                    <h4>{titolo}</h4>
                    <img src={img} alt={img_alt_it} />
                </NavLink>
            </div>
        </>
    )
}

export default BestSellerCard;