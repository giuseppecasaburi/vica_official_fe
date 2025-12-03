import Catalogue from "../components/Catalogue";
import Download from "../components/Download";
import Header from "../components/Header";

function CataloguesPage() {
    return (
        <>
            <main>
                <Header />
                <Catalogue layout={""}/>
                <Catalogue layout={"odd"}/>
                <Catalogue layout={""}/>
                <Download/>
            </main>
        </>
    )
}

export default CataloguesPage;