import { useEffect, useRef, useState } from "react";

export default function Counter({ target = 5000, duration = 1000, simbol = "+" }) {
    // Numero di partenza
    const [count, setCount] = useState(1);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);

                // parte una sola volta
                observer.disconnect();
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const increment = target / (duration / 16);

        const update = () => {
            start += increment;
            if (start < target) {
                setCount(Math.floor(start));
                requestAnimationFrame(update);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(update);
    }, [visible, target, duration]);

    return <p ref={ref}>{count.toLocaleString("it-IT")}{simbol}</p>;
}