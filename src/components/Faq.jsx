import axios from "axios";
import { useEffect, useState } from "react";

const faqUrl = import.meta.env.VITE_URL_FAQS;

function Faq() {
    const [faqs, setfaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFaqs = async () => {
            try {
                const resp = await axios.get(`${faqUrl}`);
                setfaqs(resp.data);
            } catch (err) {
                console.error(err);
                setError('Errore nel caricamento delle faqs');
            } finally {
                setLoading(false);
            }
        };

        getFaqs();
    }, []);

    console.log(faqs);
    return (
        <>
            <section id="faq-section">
                <h2 id="title-faq">Faq</h2>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {faqs.map((faq, index) => {
                        const headingId = `heading-${faq.faq_id}`;
                        const collapseId = `collapse-${faq.faq_id}`;
                        const isFirst = index === 0;

                        return (
                            <div className="accordion-item" key={faq.faq_id}>
                                <h2 className="accordion-header" id={headingId}>
                                    <button
                                        className={`accordion-button ${!isFirst ? "collapsed" : ""}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${collapseId}`}
                                        aria-expanded={isFirst}
                                        aria-controls={collapseId}
                                    >
                                        {faq.domanda_it}
                                    </button>
                                </h2>

                                <div
                                    id={collapseId}
                                    className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                                    aria-labelledby={headingId}
                                    data-bs-parent="#accordionPanelsStayOpenExample"
                                >
                                    <div className="accordion-body">
                                        {faq.risposta_it}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Faq;