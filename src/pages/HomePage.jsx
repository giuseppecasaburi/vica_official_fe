import AboutUs from "../components/AboutUs";
import CollectionHome from "../components/CollectionHome";
import CtaFinal from "../components/CtaFinal";
import Header from "../components/Header";
import WhatTheySay from "../components/WhatTheySay";

function HomePage() {
    const $name = "Progetto Inizializzato";

    return (
        <>
        <section>
            <Header />
            <CollectionHome/>
            <AboutUs/>
            <WhatTheySay/>
            <CtaFinal />
        </section>
        </>
    )
}

export default HomePage;