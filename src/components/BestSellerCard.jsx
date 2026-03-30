import { NavLink } from "react-router-dom";

function BestSellerCard({ titolo, img, img_alt_it, img_alt_en, art_id, Accessorio = "" }) {
    return (
        <>
            <div className="bs-card">
                {Accessorio === "true" ? (
                    <NavLink to={`/accessory/${art_id}`} style={{ textDecoration: "none", width: "100%", height: "100%" }}>
                    <h4>{titolo}</h4>
                    <img src={img} alt={img_alt_it} />
                </NavLink>
                ) : (
                    <NavLink to={`/product/${art_id}`} style={{ textDecoration: "none", width: "100%", height: "100%" }}>
                    <h4>{titolo}</h4>
                    <img src={img} alt={img_alt_it} />
                </NavLink>
                )}
            </div>
        </>
    )
}

export default BestSellerCard;