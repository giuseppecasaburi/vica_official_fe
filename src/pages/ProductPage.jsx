import Header from "../components/Header";
import Article from "../components/Article";
import AccessoriCorrelati from "../components/AccessoriCorrelati";
import ArticoliCorrelati from "../components/ArticoliCorrelati";
import InfoProduct from "../components/InfoProduct";

function ProductPage() {
    return (
        <>
            <main>
                <Header />
                <Article />
                <InfoProduct />
                <AccessoriCorrelati />
                <ArticoliCorrelati />
            </main>
        </>
    )
}

export default ProductPage;