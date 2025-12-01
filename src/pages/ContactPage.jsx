import DoveCiTroviamo from "../components/DoveCiTroviamo";
import Faq from "../components/Faq";
import FormContact from "../components/FormContact";
import Header from "../components/Header";

function ContactPage() {
    return (
        <>
            <main id="contatti">
                <Header />
                <FormContact/>
                <Faq/>
                <DoveCiTroviamo/>
            </main>
        </>
    )
}

export default ContactPage;