import { useState, useEffect, useRef } from 'react';

function TextTyping() {
    const text = "Costruisci il bagno";
    const text2 = " dei tuoi sogni.";
    const fullText = text + text2;

    const [displayText, setDisplayText] = useState("");
    const currentCharIndexRef = useRef(0);

    // +1 = typing, -1 = deleting
    const directionRef = useRef(1);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const typeWriter = () => {
            const idx = currentCharIndexRef.current;
            const dir = directionRef.current;

            // Fase di scrittura
            if (dir === 1) {
                if (idx < fullText.length) {
                    // Aggiungo un carattere
                    setDisplayText(fullText.slice(0, idx + 1));
                    currentCharIndexRef.current++;
                    // Next timeout per continuare a scrivere
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 50);
                } else {

                    // Ho finito di scrivere: scrivo ho finito e ora attendo 3s prima di cancellare
                    directionRef.current = -1;
                    timeoutRef.current = setTimeout(typeWriter, 3000);
                }

                // Fase di cancellazione
            } else {
                if (idx > 0) {
                    // Rimuovo un carattere
                    setDisplayText(fullText.slice(0, idx - 1));
                    currentCharIndexRef.current--;
                    // Next timeout per continuare a cancellare
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 50);
                } else {
                    // Ho finito di cancellare: cambio direzione e attendo 0.5s prima di riscrivere
                    directionRef.current = 1;
                    timeoutRef.current = setTimeout(typeWriter, 500);
                }
            }
        };

        // Avvio la macchina “typeWriter”
        typeWriter();

        // Al disassemblaggio, cancello l'eventuale timeout pendente
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []); // eseguo solo al montaggio

    // Separo il testo visualizzato in due parti
    const firstPart = displayText.slice(0, Math.min(displayText.length, text.length));
    const secondPart = displayText.slice(text.length);

    return (
        <div className="md:flex md:items-center md:justify-center font-mono">
            <div className="typing-container">
                <p id="typing-text">
                    <span className="text-part-1">
                        {firstPart}
                        {displayText.length <= text.length && <span className="cursor">&nbsp;</span>}
                    </span>
                    <span className="text-part-2">
                        {secondPart}
                        {displayText.length > text.length && <span className="cursor">&nbsp;</span>}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default TextTyping;