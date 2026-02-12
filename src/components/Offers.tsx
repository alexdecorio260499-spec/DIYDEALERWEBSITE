import React, { useState } from 'react';

// Unified Dark Green Theme for all cards
export interface Offer {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular: boolean;
  discount?: string;
  gradient: string;
  border: string;
  button: string;
  hostedButtonId: string;
  action?: 'checkout' | 'contact';
  tagline?: string;
  footerText?: string;
  buttonLabel?: string;
}

const offers: Offer[] = [
  {
    title: "Garden Clarity",
    tagline: "See the potential in your space, have confidence before investing",
    price: "€59",
    // originalPrice: "€50", // Removed as per new copy implies single price
    description: '',
    features: [
      'A professional visual concept of your garden',
      'One clear design direction',
      'Before & after transformation visuals',
      'Furnished & unfurnished views',
      'A simple action roadmap so you know what to do next'
    ],
    // footerText removed
    popular: false,
    // discount: "25% off", // Removed
    // Professional Muted Green (Sage/Moss)
    gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
    border: 'border-[#819C88]',
    button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
    hostedButtonId: 'ZQQKJSDB3EXGU',
    buttonLabel: "Get Garden Clarity"
  },
  {
    title: "The Complete Vision",
    tagline: "Finally know exactly what your garden should look like. You won’t just “have ideas.” You’ll have direction.",
    price: "€89",
    // originalPrice: "€90",
    description: "",
    features: [
      "Three distinct design styles to explore",
      "Professional presentation visuals",
      "Transformation video",
      "Furnished & unfurnished views",
      "A clear, structured implementation roadmap"
    ],
    // footerText removed
    popular: true,
    // discount: "25% off",
    // Darker Professional Green (Deep Forest/Hunter)
    gradient: 'bg-gradient-to-br from-[#1A3C28] via-[#244F35] to-[#2E6142] text-white',
    border: 'border-[#3D6B4F]',
    button: 'bg-[#C5A065] text-white hover:bg-[#D6B278]',
    hostedButtonId: 'CPZGUWQMXYGQA',
    buttonLabel: "Design My Garden Properly"
  },
  {
    title: "Signature Design",
    tagline: "A contractor-ready plan. No guesswork. No expensive mistakes. This isn’t inspiration, it’s execution",
    price: "On quotation only",
    description: "",
    features: [
      "Include everything above, plus:",
      "Detailed technical drawings",
      "3 revision rounds",
      "Build-ready plans for landscapers",
      "Structured layout with real-world proportions"
    ],
    // footerText removed
    popular: false,
    // discount: "25% off",
    // Professional Muted Green (Sage/Moss) - Matching the first one
    gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
    border: 'border-[#819C88]',
    button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
    hostedButtonId: 'RE5EAZ5UMHTRN',
    action: 'contact',
    buttonLabel: "Get my quote"
  },
];

interface OffersProps {
  onSelectPlan: (plan: Offer) => void;
}

const Offers: React.FC<OffersProps> = ({ onSelectPlan }) => {
  const [activeOffer, setActiveOffer] = useState(1);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            onClick={() => offer.action !== 'contact' ? onSelectPlan(offer) : null}
            className={`
            relative p-8 rounded-2xl border bg-[#2C3E30] flex flex-col cursor-pointer text-white
            transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-opacity-80
            ${offer.border}
            ${offer.popular ? 'ring-2 ring-[#C5A065] ring-offset-2 ring-offset-[#1a2e1a]' : ''}
          `}
          >
            {offer.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A065] text-[#1a2e1a] px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-fade-in">
                Most Popular
              </div>
            )}

            <div className={`
            absolute inset-0 rounded-2xl opacity-20 pointer-events-none transition-opacity duration-500
            ${offer.gradient}
          `} />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="font-serif text-2xl mb-2 font-bold opacity-90">
                {offer.title}
              </h3>

              {offer.tagline && (
                <p className="text-sm font-medium italic opacity-80 mb-4">
                  {offer.tagline}
                </p>
              )}

              <div className="flex items-baseline gap-2 mb-3">
                {offer.originalPrice && (
                  <span className="text-xl font-bold line-through opacity-70">
                    {offer.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-extrabold tracking-tight">
                  {offer.price}
                </span>
                {!offer.action && <span className="text-sm opacity-90 font-medium ml-1">/ Project</span>}
              </div>

              {offer.description && (
                <p className="text-sm opacity-95 mb-4 font-medium leading-tight h-12">{offer.description}</p>
              )}

              <ul className="space-y-2 mb-6 min-h-[140px]">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-100 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    {/* Unified checkmark style for dark background */}
                    <div className="rounded-full p-0.5 bg-white/20 mt-0.5 shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {offer.footerText && (
                <p className="text-xs italic opacity-80 mb-4 font-semibold text-center border-t border-white/20 pt-3">
                  {offer.footerText}
                </p>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPlan(offer);
                }}
                className={`
              w-full py-3.5 rounded-xl text-sm font-bold tracking-wide shadow-sm mt-auto cursor-pointer
              transform transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50
              ${offer.button}
            `}>
                {offer.buttonLabel || (offer.action === 'contact' ? 'Get a quote' : 'Select Plan')}
              </button>
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default Offers;
