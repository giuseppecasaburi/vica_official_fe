import Counter from "./Counter";

function BoxNumber() {
    return (
        <>
        <div id="box-area">
            <div id="conteiner-box-area">
                <div className="single-box-area">
                    <Counter target={50}/>
                    <span>Anni nel settore</span>
                </div>
                <div className="single-box-area">
                    <Counter target={100}/>
                    <span>Articoli selezionati</span>
                </div>
                <div className="single-box-area">
                    <Counter target={100} simbol="%"/>
                    <span>Made in Italy</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default BoxNumber;