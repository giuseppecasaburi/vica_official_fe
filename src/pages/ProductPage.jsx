import AccessoriCorrelati from "../components/AccessoriCorrelati";
import ArticoliCorrelati from "../components/ArticoliCorrelati";
import InfoProduct from "../components/InfoProduct";
import Header from "../components/Header";

function ProductPage() {
    return (
        <>
            <main>
                <Header />
                <InfoProduct />
                <AccessoriCorrelati />
                <ArticoliCorrelati />
            </main>
        </>
    )
}

export default ProductPage;