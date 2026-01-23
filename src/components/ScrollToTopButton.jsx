import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisibile, setIsVisibile] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisibile(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top-button ${isVisibile ? 'visible' : ''}`}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default ScrollToTopButton;