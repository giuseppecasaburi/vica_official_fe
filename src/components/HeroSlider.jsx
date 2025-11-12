function HeroSlider() {
    const items = [
        { text: "Affidabilità" },
        { text: "Qualità" },
        { text: "Professionalità" },
        { text: "Cura del cliente" }
    ];

    return (
        <>
            <div id="hero-slider">
                <div id="hero-box-area">
                    <div id="hero-conteiner-box-area">
                        {/* Ripeti gli elementi 4 volte per uno scroll fluido */}
                        {[...Array(4)].map((_, groupIndex) => (
                            items.map((item, index) => (
                                <div className="hero-single-box-area" key={`${groupIndex}-${index}`}>
                                    <span>{item.text}</span>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSlider;