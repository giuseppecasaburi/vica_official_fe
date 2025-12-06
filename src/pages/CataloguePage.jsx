import BestSeller from "../components/BestSeller";
import Description from "../components/Description";
import Download from "../components/Download";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

function CataloguePage() {
    return (
        <>
            <main>
                <Header />
                <BestSeller/>
                <Description/>
                <ProductsList/>
                <Download />
            </main>
        </>
    )
}

export default CataloguePage;