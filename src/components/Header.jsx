import { useLocation } from "react-router-dom";
import BoxNumber from "./BoxNumber";
import HeroSection from "./HeroSection";

function Header() {
    const location = useLocation();
    const hideHeader = location.pathname === "/";

    return (
        <>
            <header>
                <div className="header">
                    <HeroSection />
                </div>
                {/* {hideHeader ? <BoxNumber /> : ""} */}
            </header>
        </>
    )
}

export default Header;