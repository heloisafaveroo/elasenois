
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (n) => {
        setSlideIndex(prevIndex => {
            let newIndex = prevIndex + n;
            if (newIndex >= images.length) return 0;
            if (newIndex < 0) return images.length - 1;
            return newIndex;
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            plusSlides(1);
        }, 5000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [images.length]); // Rerun effect if images change

    if (!images || images.length === 0) {
        return <div>No images to display.</div>;
    }

    return (
        <div className="carousel-container">
            <button className="arrow prev" onClick={() => plusSlides(-1)}>❮</button>
            <div className="carousel-slide">
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img.src} 
                        alt={img.alt} 
                        className={index === slideIndex ? 'active' : ''} 
                    />
                ))}
            </div>
            <button className="arrow next" onClick={() => plusSlides(1)}>❯</button>
            <div className="carousel-controls">
                {images.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === slideIndex ? 'active' : ''}`} 
                        onClick={() => currentSlide(index)}>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
