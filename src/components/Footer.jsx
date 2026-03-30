import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <>
            <footer>
                <div id="footer-container">
                    <div id="anchor-img">
                        <div id="anchor">
                            <img src="/Documento224.png" alt="" id="logo-official" />
                        </div>
                        <div id="anchor-link">
                            <Link to={"/catalogues"} className="link-header">Catalogo</Link>
                            <Link to={"/accessories/4"} className="link-header">Accessori</Link>
                            <HashLink to="/catalogues#download-area" className="link-header nav-links colore-link">Download</HashLink>
                            <Link to={"/company"} className="link-header">Azienda</Link>
                            <Link to={"/contacts"} className="link-header">Contatti</Link>
                        </div>
                    </div>
                    <div className="retta"></div>
                    <div id="social">
                        <div className="cerchio">
                            <a className="cerchio" href="https://www.facebook.com/vicalineabagno" target="_blank" title="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                        <div className="cerchio">
                            <a className="cerchio" href="https://www.instagram.com/vica_lineabagno/" target="_blank" title="instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className="cerchio">
                            <a className="cerchio" href="https://www.facebook.com/vicalineabagno" target="_blank" title="tiktok">
                            <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                        {/* <div className="cerchio">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div> */}
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