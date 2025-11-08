import { useState, useEffect } from "react";

function IsMobile(breakpoint = 770) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup quando il componente viene smontato
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
}

export default IsMobile;