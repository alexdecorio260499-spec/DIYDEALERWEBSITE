import React from 'react';

const BeforeAfterHero: React.FC = () => {
    return (
        <section
            className="relative min-h-[60vh] md:min-h-[55vh] flex flex-col justify-center overflow-hidden select-none"
        >
            {/* Background Image moved to global App.tsx for fixed effect */}

            {/* Text Overlay - Relative to ensure container grows with content */}
            <div id="visible-offers" className="relative z-10 flex flex-col items-center justify-start pt-20 md:pt-24 pb-20 px-4 text-center max-w-6xl mx-auto scroll-mt-24">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#d4e157] drop-shadow-lg mb-6 leading-tight">
                    Finally feel proud of your garden
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-md font-light">
                    Stop second-guessing every decision.<br className="hidden md:block" /> See exactly how your outdoor space can look before you spend money, time, or energy fixing mistakes.
                </p>

                <p className="text-xl md:text-2xl text-white/95 font-bold tracking-wide drop-shadow-md mb-[37px]">
                    Thoughtful garden design, visualised clearly, so you can build with confidence.
                </p>
                <div className="hidden" />
            </div>
        </section>
    );
};

export default BeforeAfterHero;
