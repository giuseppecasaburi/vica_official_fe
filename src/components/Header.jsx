import NavigationBar from "./navigationBar";

function Header() {
    return (
        <>
            <header>
                <div id="overlay">
                    <NavigationBar />
                    <section id="hero-section">
                        <div className="text-area">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique laborum itaque aut facere asperiores.</p>
                        </div>
                        <div className="button-area">
                            <a href="" className="button-link">Link</a>
                            <a href="" className="button-link">Link</a>
                        </div>
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header;