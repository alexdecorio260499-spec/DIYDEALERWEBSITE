import React from 'react';

const Booster: React.FC = () => {
  const benefits = [
    "Avoid buying the wrong furniture",
    "Visualize before spending thousands",
    "Faster and more flexible than hiring a designer",
    "Delivered in 24–48h"
  ];

  const testimonials = [
    {
      text: "DIY DEALER DESIGNS allowed us to project ourselves into our future backyard. We now have a stunning modern retreat!",
      author: "Sarah Jenkins",
      location: "Leipzig, Germany",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "I was hesitant about a purely online service, but the designs were spot on. It probably saved us thousands in potential landscaping mistakes.",
      author: "Mark Thompson",
      location: "London, United Kingdom",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "The detailed plans made it easy to work with contractors. Everything was clear and professional. Highly recommend for anyone planning a garden renovation.",
      author: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="pt-40 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden">

        {/* Left Side: Why People Love This (High Emphasis) */}
        <div className="bg-transparent p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight relative z-10">
            Why people love this
          </h2>
          <ul className="space-y-4 relative z-10 mb-6">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-4 text-white/90 text-lg font-medium">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="relative z-10">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 bg-white text-[#1a2e1a] rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2 inline-flex"
            >
              Start My Design
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Testimonials (Clean Social Proof) */}
        <div className="bg-transparent p-8 md:p-10 flex flex-col justify-center">
          <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
            Stories
            <span className="w-8 h-[1px] bg-white opacity-80"></span>
            <span className="opacity-90">from our Sanctuaries</span>
          </h3>

          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                {/* Header: Customer Info and Stars */}
                <div className="flex items-center justify-between mb-3">
                  {/* Customer Info */}
                  <div className="flex items-center gap-2">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="text-left">
                      <strong className="block text-primary text-[12px] font-bold">{t.author}</strong>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wide">{t.location}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 text-secondary">
                    {[...Array(5)].map((_, stars) => (
                      <svg key={stars} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic text-[14px] leading-snug">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Booster;
