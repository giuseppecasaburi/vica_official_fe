import AboutUs from "../components/AboutUs";
import CollectionHome from "../components/CollectionHome";
import CtaFinal from "../components/CtaFinal";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatTheySay from "../components/WhatTheySay";

function HomePage() {
    const $name = "Progetto Inizializzato";

    return (
        <>
        <section>
            <CollectionHome/>
            <AboutUs/>
            <WhatTheySay/>
            <CtaFinal />
            <ScrollToTopButton />
        </section>
        </>
    )
}

export default HomePage;