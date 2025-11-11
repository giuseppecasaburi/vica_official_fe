import Footer from "./Footer";
import Header from "./Header";
import SponsorBanner from "./SponsorBanner";
import ScrollToTopButton from "./ScrollToTopButton";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            <SponsorBanner />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Layout;