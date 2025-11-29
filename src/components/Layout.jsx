import Footer from "./Footer";
import SponsorBanner from "./SponsorBanner";
import ScrollToTopButton from "./ScrollToTopButton";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Outlet />
            <SponsorBanner />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Layout;