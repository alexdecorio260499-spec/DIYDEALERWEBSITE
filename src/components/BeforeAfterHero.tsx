import React from 'react';
import HeroCarousel from './HeroCarousel';

import heroImage1 from '../assets/hero-final-1.png';
import heroImage2 from '../assets/hero-final-2.jpg';

const BeforeAfterHero: React.FC = () => {
    const images: string[] = [heroImage1, heroImage2];

    const handleScrollToOffers = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('offers');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center overflow-hidden select-none"
        >
            <HeroCarousel images={images} />

            {/* Text Overlay - Relative to ensure container grows with content */}
            <div id="visible-offers" className="relative z-10 flex flex-col items-center justify-start pt-32 pb-20 px-4 text-center max-w-5xl mx-auto scroll-mt-24">
                <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest drop-shadow-md mb-8 leading-tight">
                    Finally feel proud <br className="hidden md:block" /> of your garden
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow-sm font-light tracking-wide">
                    Stop second-guessing every decision.<br className="hidden md:block" /> See exactly how your outdoor space can look before you spend money, time, or energy fixing mistakes.
                </p>

                <p className="text-xl md:text-2xl text-white/90 font-serif italic tracking-wider drop-shadow-sm mb-12">
                    Thoughtful garden design, visualised clearly, so you can build with confidence.
                </p>

                <a
                    href="#offers"
                    onClick={handleScrollToOffers}
                    className="group relative px-8 py-4 bg-transparent border border-white text-white font-sans text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gsd-black transition-all duration-300"
                >
                    Explore our offers
                </a>

                <div className="hidden" />
            </div>
        </section>
    );
};

export default BeforeAfterHero;
