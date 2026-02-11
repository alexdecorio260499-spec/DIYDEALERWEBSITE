import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BeforeAfterHero from './components/BeforeAfterHero';
import Offers, { Offer } from './components/Offers';
import Booster from './components/Booster';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import MandatoryInfoForm from './components/MandatoryInfoForm';
import luxuryGardenBg from './assets/luxury-garden-after.jpg';

import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Offer | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'terms' | 'privacy' | 'contact' | 'mandatory-info'>('home');
  const [formPlan, setFormPlan] = useState<Offer | null>(null);

  // Detect URL parameters for PayPal redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment');
    const planType = urlParams.get('plan');

    if (paymentStatus === 'success' && planType) {
      // Map plan type to offer details
      const planMapping: Record<string, Offer> = {
        'quick-vision': {
          title: 'Quick Vision',
          price: '€39',
          originalPrice: '€50',
          description: 'Perfect for visualizing ideas',
          popular: false,
          gradient: 'from-[#1A3C28] via-[#244F35] to-[#2E6142]',
          border: 'border-[#5cb25d]/30',
          button: 'bg-gradient-to-r from-[#4A5D4E] to-[#5F7A65] hover:from-[#5F7A65] hover:to-[#4A5D4E]',
          hostedButtonId: 'RE5EAZ5UMHTRN',
          features: [
            'Professional documents',
            '1 design concept',
            '2D floor plan',
            'Plant suggestions',
            '48-hour delivery'
          ]
        },
        'dual-vision': {
          title: 'Dual Vision',
          price: '€59',
          originalPrice: '€80',
          description: 'Compare multiple design approaches',
          popular: true,
          gradient: 'from-[#1A3C28] via-[#244F35] to-[#2E6142]',
          border: 'border-[#5cb25d]/30',
          button: 'bg-gradient-to-r from-[#4A5D4E] to-[#5F7A65] hover:from-[#5F7A65] hover:to-[#4A5D4E]',
          hostedButtonId: 'XXXXXXXXX',
          features: [
            'Professional documents',
            '2 design concepts',
            '2D floor plan',
            'Detailed plant list',
            'Material recommendations',
            '72-hour delivery'
          ]
        },
        'signature-design': {
          title: 'Signature Design',
          price: 'From €299',
          originalPrice: '€399',
          description: 'Premium design with full support',
          popular: false,
          gradient: 'from-[#1A3C28] via-[#244F35] to-[#2E6142]',
          border: 'border-[#5cb25d]/30',
          button: 'bg-gradient-to-r from-[#4A5D4E] to-[#5F7A65] hover:from-[#5F7A65] hover:to-[#4A5D4E]',
          hostedButtonId: 'XXXXXXXXX',
          features: [
            'Professional documents',
            '3+ design concepts',
            '3D visualization',
            'Complete plant & material list',
            'Lighting plan',
            'Budget breakdown',
            'Priority support',
            '5-day delivery'
          ]
        }
      };

      const selectedPlan = planMapping[planType];
      if (selectedPlan) {
        setFormPlan(selectedPlan);
        setCurrentPage('mandatory-info');
        // Clean up URL parameters
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'terms' | 'privacy' | 'contact' | 'mandatory-info') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleShowInfoForm = (plan: Offer) => {
    setFormPlan(plan);
    setCurrentPage('mandatory-info');
    setSelectedPlan(null); // Close checkout
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
      <Header onNavigate={handleNavigate} onCheckoutClose={() => setSelectedPlan(null)} />

      <main>
        {currentPage === 'home' && (
          <>
            <BeforeAfterHero />

            {/* Offers overlap the bottom of the Hero or sit right below */}
            <div id="offers" className="relative z-20 -mt-20 md:-mt-24 px-4">
              <Offers onSelectPlan={setSelectedPlan} />
            </div>

            <Booster />
          </>
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'terms' && <Terms />}
        {currentPage === 'privacy' && <Privacy />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'mandatory-info' && formPlan && (
          <MandatoryInfoForm
            planTitle={formPlan.title}
            planPrice={formPlan.price}
            onClose={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Footer with Navigation Prop */}
      <Footer onNavigate={handleNavigate} />

      {/* Checkout Overlay */}
      {selectedPlan && (
        <Checkout
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onShowInfoForm={() => handleShowInfoForm(selectedPlan)}
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
