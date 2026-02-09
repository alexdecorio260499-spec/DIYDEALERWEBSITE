import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BeforeAfterHero from './components/BeforeAfterHero';
import Offers, { Offer } from './components/Offers';
import Booster from './components/Booster';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import luxuryGardenBg from './assets/luxury-garden-after.jpg';

import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Offer | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'terms' | 'privacy'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'terms' | 'privacy') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white relative">
      {/* Global Fixed Background (Visible on all pages) */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${luxuryGardenBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header with Navigation Prop */}
      <Header onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && (
          <>
            <BeforeAfterHero />

            {/* Offers overlap the bottom of the Hero or sit right below */}
            <div id="offers" className="relative z-20 -mt-16 md:-mt-20 px-4">
              <Offers onSelectPlan={setSelectedPlan} />
            </div>

            <Booster />
          </>
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'terms' && <Terms />}
        {currentPage === 'privacy' && <Privacy />}
      </main>

      {/* Footer with Navigation Prop */}
      <Footer onNavigate={handleNavigate} />

      {/* Checkout Overlay */}
      {selectedPlan && (
        <Checkout
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}



      {/* Scroll Down Indicator - Desktop (Bottom Right) */}
      {!scrolled && (
        <button
          onClick={() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}
          className="hidden md:flex fixed bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-white/20 transition-all animate-bounce shadow-lg group"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6 group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
