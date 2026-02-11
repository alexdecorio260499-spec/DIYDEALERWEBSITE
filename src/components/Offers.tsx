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
}

const offers: Offer[] = [
  {
    title: "Quick Vision",
    price: "€39",
    originalPrice: "€50",
    description: 'Perfect for visualizing ideas',
    features: [
      'Professional documents',
      '1 Styling Option',
      '1 Angle',
      '1 Transformation Video',
      'Unfurnished & Furnished Images',
      'Full Conception Roadmap & Good Practice'
    ],
    popular: false,
    discount: "25% off",
    // Professional Muted Green (Sage/Moss)
    gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
    border: 'border-[#819C88]',
    button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
    hostedButtonId: 'ZQQKJSDB3EXGU'
  },
  {
    title: "Dual Vision",
    price: "€59",
    originalPrice: "€80",
    description: "Explore different aesthetics",
    features: [
      "Professional documents",
      "3 Styling Options",
      "1 Angle",
      "1 Transformation Video",
      "Unfurnished & Furnished Images",
      "Full Conception Roadmap & Good Practice"
    ],
    popular: true,
    discount: "25% off",
    // Darker Professional Green (Deep Forest/Hunter)
    gradient: 'bg-gradient-to-br from-[#1A3C28] via-[#244F35] to-[#2E6142] text-white',
    border: 'border-[#3D6B4F]',
    button: 'bg-[#C5A065] text-white hover:bg-[#D6B278]',
    hostedButtonId: 'CPZGUWQMXYGQA'
  },
  {
    title: "Signature Design",
    price: "From €299",
    originalPrice: "€399",
    description: "Complete construction ready",
    features: [
      "Everything from previous offer",
      "3 Revisions",
      "Technical Drawings Ready for Contractors"
    ],
    popular: false,
    discount: "25% off",
    // Professional Muted Green (Sage/Moss) - Matching the first one
    gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
    border: 'border-[#819C88]',
    button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
    hostedButtonId: 'RE5EAZ5UMHTRN'
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
            onClick={() => setActiveOffer(index)}
            className={`
              relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 flex flex-col h-full
              ${offer.gradient}
              ${offer.border}
              ${index === 1 ? 'shadow-2xl md:scale-105 z-20' : 'shadow-lg hover:shadow-xl hover:-translate-y-1 scale-100'}
            `}
          >
            {offer.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1B5E20] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                Most Popular
              </div>
            )}

            {offer.discount && (
              <div className="absolute -top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
                {offer.discount}
              </div>
            )}

            <h3 className="font-serif text-2xl mb-2 font-bold opacity-90">
              {offer.title}
            </h3>

            <div className="flex items-baseline gap-2 mb-3">
              {offer.originalPrice && (
                <span className="text-xl font-bold line-through opacity-50">
                  {offer.originalPrice}
                </span>
              )}
              <span className="text-4xl font-extrabold tracking-tight">
                {offer.price}
              </span>
              <span className="text-sm opacity-75 font-medium">/project</span>
            </div>

            <p className="text-sm opacity-80 mb-4 h-6 font-medium leading-tight">{offer.description}</p>

            <ul className="space-y-2 mb-6">
              {offer.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-90">
                  {/* Unified checkmark style for dark background */}
                  <div className="rounded-full p-0.5 bg-white/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectPlan(offer);
              }}
              className={`
              w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all shadow-sm mt-auto
              ${offer.button}
            `}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
