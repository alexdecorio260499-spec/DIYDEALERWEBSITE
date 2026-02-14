import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
    images: string[];
    interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div
            className="absolute left-0 right-0 bottom-0 top-[70px] z-0 bg-black"
        >
            <div className="relative w-full h-full overflow-hidden">
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Garden slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
