import { color } from "framer-motion";
import { useEffect, useState } from "react";

function FormContact() {
    const API_URL = import.meta.env.VITE_URL_FORM;

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cellulare: '',
        oggetto: '',
        descrizione: '',
    });

    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                // Reset form
                setFormData({ nome: '', email: '', cellulare: '', oggetto: '', descrizione: '' });
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Errore durante l\'invio.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMsg('Impossibile contattare il server. Riprova più tardi.');
        }
    };

    return (
        <>
            <section id="area-form">
                <div id="tag-contact">
                    <h2>Il nostro team è qui per ascoltarti e offrirti tutto il supporto di cui hai bisogno.</h2>

                    {/* Desktop layout - 2 righe */}
                    <div className="ballon-row">
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                    </div>


                    {/* Mobile layout - slider unico */}
                    <div className="ballon-slider">
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>
                        <div className="ballon">
                            <p>Numero Aziendale</p>
                            <p>333 22 55 666</p>
                        </div>

                    </div>
                </div>

                <div id="form-contact">
                    <div id="form-container">
                        <h2 style={{ margin: '35px 0' }}>Contattaci <span id="form-span">in un click!</span></h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-input">
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome *"
                                    className="fild-input"
                                    value={formData.nome}
                                    maxLength={100}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    className="fild-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    maxLength={150}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="tel"
                                    name="cellulare"
                                    placeholder="Cellulare"
                                    className="fild-input"
                                    value={formData.cellulare}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="text"
                                    name="oggetto"
                                    placeholder="Oggetto *"
                                    className="fild-input"
                                    value={formData.oggetto}
                                    maxLength={150}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <textarea
                                    name="descrizione"
                                    placeholder="Descrizione *"
                                    className="fild-input text-area"
                                    value={formData.descrizione}
                                    style={{ minHeight: '150px' }}
                                    maxLength={2000}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="website"
                                value={formData.website || ''}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {status === 'success' && (
                                <p className="fild-input" style={{ marginBottom: '10px', color:'green' }}>
                                    Email inviata con successo! Ti risponderemo presto.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="fild-input" style={{ marginBottom: '10px', color:'red' }}>
                                    {errorMsg}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="button-form"
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? 'Invio in corso...' : 'Invia Email'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContact;