import Catalogue from "../components/Catalogue";
import Header from "../components/Header";

function CataloguesPage() {
    return (
        <>
            <main>
                <Header />
                <Catalogue layout={""}/>
                <Catalogue layout={"odd"}/>
                <Catalogue layout={""}/>
            </main>
        </>
    )
}

export default CataloguesPage;