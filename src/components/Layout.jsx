import Footer from "./Footer";
import SponsorBanner from "./SponsorBanner";
import ScrollToTopButton from "./ScrollToTopButton";
import { Outlet } from "react-router-dom";
import NavigationBar from "./navigationBar";

function Layout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <SponsorBanner />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Layout;