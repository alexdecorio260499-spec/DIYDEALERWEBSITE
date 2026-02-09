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
                    See it, love it, build it
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md font-light">
                    Stop guessing. Visualise your Outdoor space with realistic Staging and professional landscaping before investing thousands in the wrong setup.
                </p>

                <p className="text-xl md:text-2xl text-white/95 font-bold tracking-wide uppercase drop-shadow-md mb-8">
                    Save time, save money, enjoy the process
                </p>
                <a
                    href="#offers"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#offers')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#1a2e1a] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
                >
                    Start My Design
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m-4-4h8" />
                    </svg>
                </a>
                <div className="hidden" />
            </div>
        </section>
    );
};

export default BeforeAfterHero;
