import { useState, useEffect, useRef } from 'react';

function TextTyping() {
    // Array di frasi da mostrare in loop
    const phrases = [
        { text: "Costruisci il bagno", text2: " dei tuoi sogni." },
        { text: "Rinnova il tuo bagno", text2: " con stile." },
        { text: "Trasforma il tuo bagno", text2: " in un'oasi di relax." },
        { text: "Lasciati ispirare da", text2: " veri esperti del settore." },
        { text: "Affidati a", text2: " Vica Arredo Bagno." }
    ];

    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const currentCharIndexRef = useRef(0);
    const directionRef = useRef(1); // +1 = typing, -1 = deleting
    const timeoutRef = useRef(null);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        const fullText = currentPhrase.text + currentPhrase.text2;

        const typeWriter = () => {
            const idx = currentCharIndexRef.current;
            const dir = directionRef.current;

            // Fase di scrittura
            if (dir === 1) {
                if (idx < fullText.length) {
                    setDisplayText(fullText.slice(0, idx + 1));
                    currentCharIndexRef.current++;
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 50);
                } else {
                    // Ho finito di scrivere: attendo 3s prima di cancellare
                    directionRef.current = -1;
                    timeoutRef.current = setTimeout(typeWriter, 3000);
                }
            }
            // Fase di cancellazione
            else {
                if (idx > 0) {
                    setDisplayText(fullText.slice(0, idx - 1));
                    currentCharIndexRef.current--;
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 50);
                } else {
                    // Ho finito di cancellare: passo alla frase successiva
                    directionRef.current = 1;
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                    timeoutRef.current = setTimeout(typeWriter, 500);
                }
            }
        };

        typeWriter();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentPhraseIndex]); // Si riavvia quando cambia la frase

    // Calcolo quale frase stiamo mostrando per separare le due parti colorate
    const currentPhrase = phrases[currentPhraseIndex];
    const text = currentPhrase.text;

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