import HomePage from "../pages/HomePage";
import Footer from "./Footer";
import Header from "./Header";
import SponsorBanner from "./SponsorBanner";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout() {
    return (
        <>
            <Header />
            <HomePage />
            <SponsorBanner />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Layout;