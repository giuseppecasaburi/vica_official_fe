import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

function CollectionHome() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [400, 1000], [0, 100]);
    const y2 = useTransform(scrollY, [1000, 2000], [0, 100]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            console.log("scrollY:", latest);
        });
        return () => unsubscribe();
    }, [scrollY]);

    useEffect(() => {
        const unsubscribe = y.on("change", (latest) => {
        });
        return () => unsubscribe();
    }, [y]);

    return (
        <>
            <section className="collection-home">
                <div className="image-container">
                    <div id="img1">
                        <motion.img
                            src="./test.webp"
                            alt=""
                            id=""
                            style={{
                                y,
                                top: "100%",
                                translateY: "-10%"
                            }}
                        />
                    </div>
                    <div id="img2">
                        <motion.img
                            src="./test.webp"
                            alt=""
                            id=""
                            style={{
                                y,
                                top: "100%",
                                translateY: "-20%"
                            }}
                        />
                    </div>
                </div>

                <div className="text-collection1">
                    <p>Design e ispirazione.</p>
                    <h2>Collezioni di Arredo Bagno</h2>
                    <a href="" className="button-link">Esplora ora i cataloghi</a>
                </div>
            </section>
            <section className="collection-home">
                <div className="text-collection2">
                    <p>Dettagli di stile.</p>
                    <h2>Accessori per il Bagno</h2>
                    <a href="" className="button-link">Scopri tutti gli accessori</a>
                </div>
                <div className="image-container">
                    <div id="img3">
                        <motion.img
                            src="./test.webp"
                            alt=""
                            id=""
                            style={{
                                y: y2,
                                top: "100%",
                                translateY: "-10%"
                            }}
                        />
                    </div>
                    <div id="img4">
                        <motion.img
                            src="./test.webp"
                            alt=""
                            id=""
                            style={{
                                y: y2,
                                top: "100%",
                                translateY: "-20%"
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default CollectionHome;