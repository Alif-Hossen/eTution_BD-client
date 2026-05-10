import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; 

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-[#BCE955] text-black shadow-lg hover:bg-lime-600 transition-all duration-300 animate-bounce"
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;