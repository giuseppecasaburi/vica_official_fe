import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <>
            <footer>
                <div id="footer-container">
                    <div id="anchor">
                        <div id="anchor-img">
                            <img src="./logo.png" alt="" id="logo-official" />
                        </div>
                        <div id="anchor-link">
                            <a href="" className="link-header">Catalogo</a>
                            <a href="" className="link-header">Accessori</a>
                            <a href="" className="link-header">Azienda</a>
                            <a href="" className="link-header">Contatti</a>
                        </div>
                    </div>
                    <div className="retta"></div>
                    <div id="social">
                        <div className="cerchio">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="cerchio">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="cerchio">
                            <FontAwesomeIcon icon={faTiktok} />
                        </div>
                        <div className="cerchio">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <div id="credit">
                        <span><a href="/privacy-policy">Privacy Policy</a></span>
                        <span>© 2025 Vica Arredo Bango. Tutti i diritti riservati.</span>
                        <span>Powered by <a href="https://giuseppe-casaburi-official-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Giuseppe Casaburi</a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;