import Counter from "./Counter";

function BoxNumber() {
    const items = [
        { target: 50, text: "Anni nel settore" },
        { target: 100, text: "Articoli selezionati" },
        { target: 100, simbol: "%", text: "Made in Italy" }
    ];

    return (
        <>
            <div id="box-area">
                <div id="conteiner-box-area">
                    {/* Ripeti gli elementi 4 volte per uno scroll fluido */}
                    {[...Array(4)].map((_, groupIndex) => (
                        items.map((item, index) => (
                            <div className="single-box-area" key={`${groupIndex}-${index}`}>
                                <Counter target={item.target} simbol={item.simbol} />
                                <span>{item.text}</span>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </>
    )
}

export default BoxNumber;