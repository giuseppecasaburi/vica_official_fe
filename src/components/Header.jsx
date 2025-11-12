import { useLocation } from "react-router-dom";
import BoxNumber from "./BoxNumber";
import HeroSection from "./HeroSection";

function Header() {
    const location = useLocation();
    const hideHeader = location.pathname === "/";

    return (
        <>
            <header style={hideHeader ? {} : {height:"85vh"}}>
                <div className="header" style={hideHeader ? {} : {height:"80%"}}>
                    <HeroSection />
                </div>
                {hideHeader ? <BoxNumber /> : ""}
            </header>
        </>
    )
}

export default Header;