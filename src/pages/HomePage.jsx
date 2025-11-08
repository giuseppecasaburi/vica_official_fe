import AboutUs from "../components/AboutUs";
import CollectionHome from "../components/CollectionHome";
import CtaFinal from "../components/CtaFinal";
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
        </section>
        </>
    )
}

export default HomePage;