import React, { useState, useEffect } from 'react';
import package1 from '../assets/package-1.jpg';
import package2a from '../assets/package-2-a.jpg';
import package2b from '../assets/package-2-b.jpg';
import package3 from '../assets/package-3.jpg';

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
  image?: string;
  splitImages?: [string, string];
}

const getOffers = (currency: 'EUR' | 'GBP' | 'USD'): Offer[] => {
  const prices = {
    EUR: { clarity: '€59', vision: '€89', signature: 'On quotation only' },
    GBP: { clarity: '£49', vision: '£79', signature: 'On quotation only' },
    USD: { clarity: '$69', vision: '$99', signature: 'On quotation only' },
  };

  const p = prices[currency];

  return [
    {
      title: "Garden Clarity",
      tagline: "See the potential in your space, have confidence before investing",
      price: p.clarity,
      description: '',
      features: [
        'A professional visual concept of your garden',
        'One clear design direction',
        'Before & after transformation visuals',
        'Furnished & unfurnished views',
        'A simple action roadmap so you know what to do next'
      ],
      popular: false,
      gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
      border: 'border-[#819C88]',
      button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
      hostedButtonId: 'ZQQKJSDB3EXGU',
      buttonLabel: "Get Garden Clarity",
      image: package1
    },
    {
      title: "The Complete Vision",
      tagline: "Finally know exactly what your garden should look like. You won’t just “have ideas.” You’ll have direction.",
      price: p.vision,
      description: "",
      features: [
        "Three distinct design styles to explore",
        "Professional presentation visuals",
        "Transformation video",
        "Furnished & unfurnished views",
        "A clear, structured implementation roadmap"
      ],
      popular: true,
      gradient: 'bg-gradient-to-br from-[#1A3C28] via-[#244F35] to-[#2E6142] text-white',
      border: 'border-[#3D6B4F]',
      button: 'bg-[#C5A065] text-white hover:bg-[#D6B278]',
      hostedButtonId: 'CPZGUWQMXYGQA',
      buttonLabel: "Design My Garden Properly",
      splitImages: [package2a, package2b]
    },
    {
      title: "Signature Design",
      tagline: "A contractor-ready plan. No guesswork. No expensive mistakes. This isn’t inspiration, it’s execution",
      price: p.signature,
      description: "",
      features: [
        "Include everything above, plus:",
        "Detailed technical drawings",
        "3 revision rounds",
        "Build-ready plans for landscapers",
        "Structured layout with real-world proportions"
      ],
      popular: false,
      gradient: 'bg-gradient-to-br from-[#4A5D4E] to-[#5F7A65] text-white',
      border: 'border-[#819C88]',
      button: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3E30]',
      hostedButtonId: 'RE5EAZ5UMHTRN',
      action: 'contact',
      buttonLabel: "Get my quote",
      image: package3
    },
  ];
};

interface OffersProps {
  onSelectPlan: (plan: Offer) => void;
}

const Offers: React.FC<OffersProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'EUR' | 'GBP' | 'USD'>('USD');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;

        if (countryCode === 'GB') {
          setCurrency('GBP');
        } else if (countryCode === 'US') {
          setCurrency('USD');
        } else {
          setCurrency('USD');
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCurrency('USD');
      }
    };

    fetchLocation();
  }, []);

  const offers = getOffers(currency);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-gsd-black mb-4">Our Packages</h2>
        <div className="w-16 h-0.5 bg-gsd-olive mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] mb-6 overflow-hidden relative group-hover:shadow-lg transition-shadow duration-300">

              {/* Single Image Logic */}
              {offer.image && (
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Split Image Logic */}
              {offer.splitImages && (
                <div className="w-full h-full relative overflow-hidden">
                  {/* First Image (Top Left / Left Half) - Diagonal Clip */}
                  <div className="absolute inset-0 z-10 w-full h-full overflow-hidden" style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)' }}>
                    <img
                      src={offer.splitImages[0]}
                      alt={`${offer.title} 1`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Separator Line - Using clip-path to match the image cut exactly */}
                  <div className="absolute inset-0 pointer-events-none z-20 bg-white" style={{
                    clipPath: 'polygon(60.2% 0, 59.8% 0, 39.8% 100%, 40.2% 100%)'
                  }}></div>

                  {/* Second Image (Bottom Right / Right Half) */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={offer.splitImages[1]}
                      alt={`${offer.title} 2`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

              {offer.popular && (
                <span className="absolute top-4 right-[4px] bg-gsd-olive text-white text-xs font-bold uppercase tracking-widest px-3 py-1 z-30">
                  Most Popular
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl text-gsd-black mb-2 group-hover:text-gsd-olive transition-colors duration-300">
              {offer.title}
            </h3>

            <div className="flex items-baseline gap-2 mb-4 justify-center text-gsd-black">
              {offer.originalPrice && (
                <span className="text-sm line-through opacity-50 font-sans">
                  {offer.originalPrice}
                </span>
              )}
              <span className="text-lg font-sans font-light tracking-wide">
                {offer.price}
              </span>
            </div>

            {offer.tagline && (
              <p className="text-sm font-sans text-gsd-grey mb-6 max-w-xs leading-relaxed">
                {offer.tagline}
              </p>
            )}

            <ul className="mb-8 space-y-2 text-sm text-gsd-grey font-sans opacity-80">
              {offer.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              onClick={() => offer.action !== 'contact' ? onSelectPlan(offer) : null}
              className="mt-auto border border-gsd-black text-gsd-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-gsd-black hover:text-white transition-all duration-300"
            >
              {offer.buttonLabel || (offer.action === 'contact' ? 'Get a quote' : 'View Details')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
