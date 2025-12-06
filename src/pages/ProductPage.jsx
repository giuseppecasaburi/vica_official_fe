import AccessoriCorrelati from "../components/AccessoriCorrelati";
import ArticoliCorrelati from "../components/ArticoliCorrelati";
import Header from "../components/Header";

function ProductPage() {
    return (
        <>
            <main>
                <Header />
                <AccessoriCorrelati />
                <ArticoliCorrelati/>
            </main>
        </>
    )
}

export default ProductPage;