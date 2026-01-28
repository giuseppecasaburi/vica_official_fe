function Description({titolo, descrizione_it, descrizione_en}) {
    return (
        <>
        <section id="catalogue-description">
            <div id="desciption-container">
                <h2>{titolo}</h2>
                <p>{descrizione_it}</p>
            </div>
        </section>
        </>
    )
}

export default Description;